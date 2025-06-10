# Initialize git if not already done
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit for White Whaling project"

# Add your remote repository
git remote add origin https://github.com/ashik0204/whitewhale.git
# Push your code
git push -u origin main  # or master, depending on your default branch

# Make sure the server directory is committed
git add server/
git commit -m "Add server directory with package.json"
git push origin main
