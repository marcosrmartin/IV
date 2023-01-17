FROM node:18.13-alpine3.17
WORKDIR /home/node/

USER node
COPY --chown=node:node . .

RUN yarn setup

ENTRYPOINT [ "yarn", "test" ]