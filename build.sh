#!/bin/bash
set -e  # Exit on error

echo "===================="
echo "White Whale Full Build"
echo "===================="

# Install dependencies at the root level
echo "Installing root dependencies..."
npm install

# Build the frontend
echo "Building frontend..."
if [ -d "src" ]; then
  cd src
  npm install
  npm run build
  cd ..
  
  # Create dist directory in the project root if it doesn't exist
  echo "Copying frontend build to distribution folder..."
  mkdir -p dist
  
  # Copy the built frontend to the root dist directory
  if [ -d "src/dist" ]; then
    cp -r src/dist/* dist/
  else
    echo "WARNING: Frontend build directory not found at src/dist"
    exit 1
  fi
else
  echo "ERROR: src directory not found"
  exit 1
fi

# Install server dependencies
echo "Installing server dependencies..."
cd server
npm install
cd ..

echo "Build complete! Start the server with: npm start"
