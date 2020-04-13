# Build a ReactJS + Express app in Okteto Cloud

## Get the Initial App 

The app has the following components:
- `client`: The basic skaffolding of a react app
- `server.js`: An express server with a `hello world` API
- `package.json`: A root `package.json` with the name of the app and scripts to install the dependencies and start the dev servers.

## Start your Development Environment

Install the okteto CLI.

Create a `okteto.yml` file with the following contents
```
```

Also, create a `.stignore` file with the following contents:
```
```

Login to Okteto Cloud

```
okteto login
```

Start your development environment:

```
okteto up
```

## Develop the App

Install the dependencies on your development environment:

```
okteto> yarn install
```

Start your dev servers:

```
okteto> yarn dev
```

Go to Okteto Cloud, and click on the application's URL.

Make the following changes to the app:
- Change the API to return logos for Okteto and React
- Change the frontend to call the API to change logos

Reload the browser to see how everything changes automatically.

## Deployment to Okteto Cloud

Open `server.js` and add code to serve the React app's static assets:

```
...
...
```

Add a `build` script to `package.json` that builds the React App:

```
"scripts": {
  ...,
  "build": "yarn --cwd client install && yarn --cwd client build"
}
```

Add a Dockerfile 
```
...
...
```

Deploy to Okteto Cloud:

```
okteto push
```

Access your application and share it with the world!



