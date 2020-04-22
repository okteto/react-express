FROM okteto/node:10 as build

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
COPY client/package.json client/yarn.lock client/
RUN yarn install
RUN yarn --cwd client install
COPY . . 
RUN yarn --cwd client build

ENV PORT 8080
ENV NODE_ENV production
CMD ["node", "server.js"]