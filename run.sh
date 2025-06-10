# Install root dependencies
npm install

# Install server dependencies
cd server
npm install
cd ..

# Install client dependencies (if in a separate folder)
# If your client code is in the src folder:
cd src
npm install
cd ..
