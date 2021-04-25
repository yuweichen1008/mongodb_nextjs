FROM node:14.16.1-alpine3.10 as build-deps

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

COPY . ./

RUN yarn build

ENV PORT=8080

EXPOSE 8080

CMD = [ "yarn", "run", "dev"]