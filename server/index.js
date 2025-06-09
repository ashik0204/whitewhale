import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import session from 'express-session';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import blogRoutes from './routes/blog.js';
import adminRoutes from './routes/admin.js';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

// Get directory path for current module (ESM equivalent of __dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Try multiple possible paths for .env file
let envLoaded = false;
const possiblePaths = [
  path.join(__dirname, '..', '.env'),        // project root
  path.join(__dirname, '.env'),              // server folder
  '.env'                                     // current working directory
];

for (const envPath of possiblePaths) {
  if (fs.existsSync(envPath)) {
    console.log(`Loading .env from: ${envPath}`);
    dotenv.config({ path: envPath });
    envLoaded = true;
    break;
  }
}

if (!envLoaded) {
  console.warn("Warning: No .env file found, using hardcoded defaults");
}

// Define hardcoded fallback values for critical variables
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://ashikstenny:QHg3Ye8OpQ0ZH0F0@cluster0.anvyfjd.mongodb.net/';
const SESSION_SECRET = process.env.SESSION_SECRET || 'your_default_secret';
const PORT = process.env.PORT || 3001; // Use 3001 as default since 3000 seems to be in use

const app = express();

app.use(cors({
  origin: ['http://localhost:3001', 'http://localhost:5173'],
  credentials: true
}));
app.use(express.json());
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));

// Connect to MongoDB with proper error handling
console.log(`Connecting to MongoDB: ${MONGODB_URI.substring(0, MONGODB_URI.indexOf('@') + 1)}***`);
mongoose.connect(MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit with failure if MongoDB connection fails
  });

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/admin', adminRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

// Try multiple ports if the default is in use
function startServer(port) {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  }).on('error', (e) => {
    if (e.code === 'EADDRINUSE') {
      console.log(`Port ${port} is already in use. Trying port ${port + 1}`);
      startServer(port + 1);
    } else {
      console.error("Server error:", e);
      process.exit(1);
    }
  });
}

startServer(PORT);