# White Whaling Landing Page

## Deployment & Updates

### Initial Setup
1. Install dependencies: `npm install`
2. Install Netlify CLI: `npm install -g netlify-cli`
3. Login to Netlify: `netlify login`
4. Deploy: `npm run deploy-netlify`

### Making Updates
When you make changes to your codebase:

1. Make your code changes
2. Run `npm run deploy-netlify` again
3. Your changes will be reflected immediately at the same URL

### GitHub Integration (Recommended)
For automatic updates whenever you push changes:

1. Push your code to GitHub
2. Connect your Netlify site to your GitHub repo
3. Enable "Auto Publish" in Netlify settings
4. Now any changes pushed to your main branch will be automatically deployed

### Render Deployment
1. Fork/clone the repository
2. Create a [Render](https://render.com) account if you don't have one
3. Connect your GitHub/GitLab account to Render
4. Click "New" and select "Web Service"
5. Connect your repository
6. Configure the following settings:
   - **Name**: white-whaling
   - **Runtime**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
7. Add the following environment variables:
   - `NODE_ENV`: production
   - `MONGODB_URI`: Your MongoDB connection string (or use Render's MongoDB service)
   - `SESSION_SECRET`: A secure random string
   - `ADMIN_EMAIL`: Initial admin email
   - `ADMIN_PASSWORD`: Initial admin password
   - `ADMIN_USERNAME`: Initial admin username
8. Click "Create Web Service"

### MongoDB Setup on Render
1. In Render dashboard, click "New" and select "Database"
2. Choose MongoDB
3. Configure name and region
4. After creation, copy the internal connection string
5. Add it as `MONGODB_URI` environment variable in your web service

## Local Development
1. Clone the repository
2. Copy `.env.example` to `.env` and update values
3. Install dependencies: `npm install`
4. Start development server: `npm run dev:full`
5. Open http://localhost:5173 in your browser

## Technologies Used

- React (frontend)
- Express.js (backend)
- MongoDB (database)
- Render (hosting)
- CSS3 (styling)
- Vite (build tool)

## Features

- Responsive landing page
- Admin dashboard
- Blog management system
- User authentication
- Database integration

## Admin Access

After deployment, you can access the admin dashboard at:
- URL: `https://your-site-name.onrender.com/admin/login`
- Email: The value of your `ADMIN_EMAIL` env variable
- Password: The value of your `ADMIN_PASSWORD` env variable

## Contact

Feel free to reach out if you have any questions or would like to discuss this project further.

## Screenshots

![Landing Page Hero](./screenshots/hero.png)
![Features Section](./screenshots/features.png)
![Pricing Plans](./screenshots/pricing.png)

(Note: You'll need to create these screenshots manually)
