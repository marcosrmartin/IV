FROM node:alpine
WORKDIR /app

COPY package.json .
RUN yarn setup

WORKDIR /app/test
USER node

ENTRYPOINT [ "yarn", "test" ]