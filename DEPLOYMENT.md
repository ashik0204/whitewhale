# Deployment Information

## Website URL
[White Whaling Landing Page](https://your-site-name.netlify.app)
(Replace with your actual Netlify URL)

## Netlify Dashboard
To make changes to your deployment settings:
1. Go to: https://app.netlify.com/
2. Login with the account you used for deployment
3. Select your site from the dashboard

## Making Updates
When you make changes to your code:
1. Make your code changes locally
2. Run `npm run deploy-netlify` again
3. The same URL will be updated with your changes

## Custom Domain Setup (Optional)
To use a custom domain with your site:
1. Go to the Netlify dashboard
2. Navigate to "Site settings" > "Domain management"
3. Click "Add custom domain"
4. Follow the instructions to configure your domain

## 3. Verify your deployment

Open the URL in your browser to make sure your site is working correctly. Check that:
- All images load properly
- All links work
- The site is responsive (test on different devices or using browser dev tools)

### 4. Share the URL with employers

Now you can share this URL with your employers. The site will remain accessible as long as your Netlify account is active, and any updates you push through `npm run deploy-netlify` will automatically update the same URL.

## Troubleshooting

### Images Not Loading
- Check that all image paths are relative and correct
- Ensure images are in the correct folders
- Try adding them to the `/public` folder and referencing them with absolute paths

### Deploy Failed
- Check the error messages in terminal
- Ensure all dependencies are installed: `npm install`
- Verify your netlify.toml file exists and is configured properly

### Site Not Updating
- Clear your browser cache
- Check that the deployment completed successfully
- Verify you're looking at the correct URL
