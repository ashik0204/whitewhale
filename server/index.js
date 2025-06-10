import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import session from 'express-session';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import blogRoutes from './routes/blog.js';
import adminRoutes from './routes/admin.js';
import uploadRoutes from './routes/upload.js';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { createInitialAdmin } from './utils/setupAdmin.js';

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
const PORT = process.env.PORT || 3001;

const app = express();

// Define paths for frontend build
const FRONTEND_BUILD_PATH = path.join(__dirname, '..', 'dist');
const isDevelopment = process.env.NODE_ENV !== 'production';

app.use(cors({
  origin: isDevelopment 
    ? ['http://localhost:3001', 'http://localhost:5173'] 
    : process.env.CLIENT_URL || '*',
  credentials: true
}));
app.use(express.json());
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));

// Serve static files from the public directory (for uploads)
app.use('/uploads', express.static(path.join(__dirname, '..', 'public', 'uploads')));

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/upload', uploadRoutes);

// Connect to MongoDB
console.log(`Connecting to MongoDB: ${MONGODB_URI.substring(0, MONGODB_URI.indexOf('@') + 1)}***`);
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    // Create initial admin user if needed
    return createInitialAdmin();
  })
  .then(() => {
    // Serve static files from the frontend build
    if (fs.existsSync(FRONTEND_BUILD_PATH)) {
      console.log(`Serving frontend from: ${FRONTEND_BUILD_PATH}`);
      app.use(express.static(FRONTEND_BUILD_PATH));
      
      // Handle SPA routing - all non-API routes should serve the index.html
      app.get('*', (req, res, next) => {
        if (req.url.startsWith('/api/')) {
          // Skip API routes
          return next();
        }
        res.sendFile(path.join(FRONTEND_BUILD_PATH, 'index.html'));
      });
    } else {
      console.warn(`Frontend build not found at ${FRONTEND_BUILD_PATH}`);
      
      // Development fallback
      if (isDevelopment) {
        app.get('/', (req, res) => {
          res.send('API is running. Frontend build not found.');
        });
      }
    }
    
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log(`- API available at http://localhost:${PORT}/api`);
      console.log(`- Frontend ${fs.existsSync(FRONTEND_BUILD_PATH) ? 'available' : 'NOT available'} at http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });