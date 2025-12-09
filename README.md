# Manhole Dashboard

A React-based dashboard application for monitoring manhole systems.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

## Deployment to Render

This project includes a `render.yaml` configuration file for easy deployment to Render.

### Option 1: Using render.yaml (Recommended)

1. Push your code to GitHub
2. Connect your repository to Render
3. Render will automatically detect the `render.yaml` file and configure your service
4. Your app will be deployed as a static site

### Option 2: Manual Configuration

If you prefer manual setup on Render:

1. **Build Command:** `npm install && npm run build`
2. **Publish Directory:** `build`
3. **Environment:** Static Site

### ⚠️ Common Error Fix

If you see this error:
```
ERROR Could not parse /etc/mime.types as JSON
```

**DO NOT** use this command:
```bash
serve -s build -l 3000 -c /etc/mime.types  # ❌ WRONG
```

The `-c` flag expects a JSON config file, not a MIME types file. Instead:

**For Static Site on Render:** Use the `render.yaml` configuration (already included)

**For local testing with serve:**
```bash
npm install -g serve
serve -s build -l 3000  # ✅ CORRECT (no -c flag needed)
```

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
