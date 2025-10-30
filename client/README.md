# Betterful Client

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and uses a Strapi backend.

## Environment Setup

See [ENV_VARIABLES.md](./ENV_VARIABLES.md) for detailed environment configuration instructions.

### Quick Start - Local Development

1. Create a `.env.local` file in the client directory:
```env
REACT_APP_API_URL=http://localhost:1337/api
REACT_APP_API_TOKEN=your_strapi_api_token
REACT_APP_USE_PROXY=false
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

## Deploying to Vercel

This application uses Vercel Serverless Functions to securely proxy requests to Strapi, keeping your API token secret.

### Prerequisites
- A Vercel account
- A deployed Strapi backend

### Deployment Steps

1. **Install Vercel CLI** (optional, can also deploy via GitHub integration):
```bash
npm install -g vercel
```

2. **Set Environment Variables in Vercel Dashboard**:
   - Go to your project settings in Vercel
   - Navigate to **Environment Variables**
   - Add the following **server-side** variables:
     - `STRAPI_API_URL`: Your Strapi API URL (e.g., `https://your-strapi.com/api`)
     - `STRAPI_API_TOKEN`: Your Strapi API token
   - Optionally add client-side variable:
     - `REACT_APP_USE_PROXY`: Set to `true` (or omit, as production enables it automatically)

3. **Deploy**:
   - Via Vercel CLI: `vercel --prod`
   - Or push to your connected GitHub repository

### Security Notes

⚠️ **Important**: Never commit `.env` files or expose `REACT_APP_API_TOKEN` in production builds.

The serverless function at `/api/strapi-proxy.js` handles all API authentication server-side, ensuring your Strapi API token remains secret.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
