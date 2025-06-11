@echo off
echo Installing root dependencies...
npm install

echo Creating directories if they don't exist...
if not exist "server" mkdir server
if not exist "src" mkdir src
if not exist "public\uploads" mkdir "public\uploads"

echo Installing server dependencies...
cd server
npm install
cd ..

echo Installing client dependencies...
cd src
npm install
cd ..

echo Setup complete! You can now run the application with 'npm run dev'
pause
