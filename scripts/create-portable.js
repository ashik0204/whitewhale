const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Build the project
console.log('Building project...');
try {
  execSync('npm run build', { stdio: 'inherit' });
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}

// Create a portable folder
const portableDir = path.join(__dirname, '../white-whaling-portable');
if (fs.existsSync(portableDir)) {
  fs.rmSync(portableDir, { recursive: true });
}
fs.mkdirSync(portableDir);

// Copy dist folder
console.log('Copying build files...');
fs.cpSync(path.join(__dirname, '../dist'), path.join(portableDir, 'dist'), { recursive: true });

// Create a simple server file
const serverContent = `
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('dist'));

app.listen(port, () => {
  console.log(\`White Whaling website running at http://localhost:\${port}\`);
  console.log('Press Ctrl+C to quit');
});
`;
fs.writeFileSync(path.join(portableDir, 'server.js'), serverContent);

// Create package.json for portable version
const packageJson = {
  "name": "white-whaling-landing-page",
  "version": "1.0.0",
  "description": "White Whaling Landing Page",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^4.18.2"
  }
};
fs.writeFileSync(path.join(portableDir, 'package.json'), JSON.stringify(packageJson, null, 2));

// Create README with simple instructions
const readmeContent = `
# White Whaling Landing Page

This is a portable version of the White Whaling landing page.

## How to View

### Quick Start
1. Install Node.js from https://nodejs.org if you don't have it
2. Open a command prompt or terminal in this folder
3. Run: npm install
4. Run: npm start
5. Open http://localhost:3000 in your browser

### Alternative (No Installation Required)
You can also directly open the file:
\`dist/index.html\` in your browser.

`;
fs.writeFileSync(path.join(portableDir, 'README.md'), readmeContent);

console.log('Portable version created successfully!');
console.log(`Your portable website is available at: ${portableDir}`);
console.log('You can zip this folder and share it with employers');
