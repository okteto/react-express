# Build a ReactJS + Express app in Okteto Cloud

TODO: paragraph on what's the post about

## Get the Initial App 

TODO: put initial app in a gist

The app has the following components:
- `client`: The basic skaffolding of a react app
- `server.js`: An express server with a `hello world` API
- `package.json`: A root `package.json` with the name of the app and scripts to install the dependencies and start the dev servers.

## Start your Development Environment

TODO: paragraph on what's a dev env 

Install the okteto CLI.

Create an `okteto.yml` file at the root of your repo and pastee the following content:

```
name: react-express
image: okteto/node:10
command:
- bash
workdir: /usr/src/app
environment:
- NODE_ENV=development
```

Also, create a `.stignore` file with the content below. This tells Okteto to ignore the `build`, `node_modules` and log files.

```
build
node_modules
*.log
```

Login to Okteto Cloud

```
okteto login
```

Start your development environment:

```
okteto up --deploy
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

Open `server.js` in your favorite IDE, and add a `logo` API that returns logos for `react` and `okteto`:

```
...
...
...
```

Now go to `client/App.js` and add a form at the bottom of the page that allows you to ask for a different logo:

```
````

Reload the browser, and the form will be at the bottom. Try it out with `okteto`, and then with `react`. What happens if you pass an unexpected value? How about you update the API to add a default image for those cases?

## Deployment to Okteto Cloud

TODO: explain that now that you are not developing, you can deploy to Okteto Cloud to have a static version.

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

Create a `Dockerfile` file at the root of the repository and paste the following content:

```
FROM okteto/node:10 as build

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
COPY client/package.json client/yarn.lock client/
RUN yarn install
COPY . . 
RUN yarn build

ENV PORT 8080
ENV NODE_ENV production
CMD ["node", "server.js"]
```

The `Dockerfile` tells Okteto Cloud how to build your application, where to install the dependencies and how to start your server. 


Deploy to Okteto Cloud:

```
okteto push
```

TODO: paragraph on what just happened and how to leverage it

Access your application and share it with the world!