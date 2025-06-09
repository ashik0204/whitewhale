import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import readline from 'readline';

// ES module file path handling
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('===== White Whaling Local Development Setup =====');

// Check if .env exists
const envPath = path.join(__dirname, '.env');
if (!fs.existsSync(envPath)) {
  console.log('Creating .env file...');
  
  const envExample = fs.readFileSync(
    path.join(__dirname, '.env.example'), 
    'utf8'
  );
  
  fs.writeFileSync(envPath, envExample);
  console.log('✅ Created .env file from template');
} else {
  console.log('✅ .env file already exists');
}

// Check for MongoDB
console.log('\nChecking MongoDB connection...');
try {
  // A simple check to see if MongoDB is running locally
  execSync('mongosh --eval "db.serverStatus()" --quiet');
  console.log('✅ MongoDB is running locally');
} catch (error) {
  console.log('⚠️  MongoDB may not be running locally');
  console.log('Please make sure MongoDB is installed and running:');
  console.log('- For local installation: Run `mongod` in another terminal');
  console.log('- For MongoDB Atlas: Update MONGODB_URI in your .env file');
}

rl.question('\nWould you like to install dependencies now? (y/n) ', (answer) => {
  if (answer.toLowerCase() === 'y') {
    console.log('\nInstalling dependencies...');
    try {
      execSync('npm install', { stdio: 'inherit' });
      console.log('✅ Dependencies installed successfully');
    } catch (error) {
      console.error('❌ Failed to install dependencies:', error.message);
    }
  }

  console.log('\n===== Setup Complete =====');
  console.log('\nTo start the development server:');
  console.log('1. Run: npm run dev:full');
  console.log('2. Open: http://localhost:5173 in your browser');
  console.log('\nAdmin login:');
  console.log('- URL: http://localhost:5173/admin/login');
  console.log('- Email: admin@whitewhaling.com (or as configured in .env)');
  console.log('- Password: adminpassword (or as configured in .env)');
  
  rl.close();
});
