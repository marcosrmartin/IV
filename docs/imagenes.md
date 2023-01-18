## ALPINE
Viene por defecto con yarn, por lo que tendríamos que cambiar el script setup de nuestra aplicación para eliminar la orden de instalación de yarn.

    FROM node:alpine
    WORKDIR /app

    COPY package.json .
    RUN yarn setup
    WORKDIR /app/test

    USER node

## BULLSEYE-SLIM
Viene por defecto con yarn, por lo que tendríamos que cambiar el script setup de nuestra aplicación para eliminar la orden de instalación de yarn.
    
    FROM node:current-bullseye-slim
    WORKDIR /app

    COPY --chown=node:node package.json .
    RUN yarn setup
    WORKDIR /app/test

    USER node


## BUSTER-SLIM
Viene por defecto con yarn, por lo que tendríamos que cambiar el script setup de nuestra aplicación para eliminar la orden de instalación de yarn.

    FROM node:current-buster-slim
    WORKDIR /app

    COPY --chown=node:node package.json .
    RUN yarn setup
    WORKDIR /app/test

    USER node

# BASEIMAGE

    FROM phusion/baseimage:jammy-1.0.1
    WORKDIR /app/
    
    # Añadimos node ya que si no nos da error USER al no estar en passwd
    # y copia los archivos con dueño root
    # Seleccionamos la versión de Node que queremos utilizar 
    RUN groupadd node && useradd -g node node \
        && curl -fsSL https://deb.nodesource.com/setup_19.x | bash - \
        && install_clean nodejs
    
    COPY --chown=node:node package.json .
    RUN npm run setup
    
    WORKDIR /app/test/