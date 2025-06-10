#!/bin/bash
set -e  # Exit on error

echo "Installing root dependencies..."
npm install

echo "Installing server dependencies..."
cd server
npm install
cd ..

echo "Client build step would go here if needed"
# Add client build step if needed
# cd client
# npm install
# npm run build
# cd ..

echo "Build completed successfully!"
