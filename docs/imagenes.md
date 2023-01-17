## ALPINE
Viene por defecto con yarn, por lo que tendríamos que cambiar el script setup de nuestra aplicación para eliminar la orden de instalación de yarn.

    FROM node:18.13-alpine3.17
    WORKDIR /home/node/
    
    #Para evitar que cuando se inicie el contenedor lo haga con root
    USER node
    COPY --chown=node:node . .
    
    RUN yarn set version berry

## BULLSEYE-SLIM
Viene por defecto con yarn, por lo que tendríamos que cambiar el script setup de nuestra aplicación para eliminar la orden de instalación de yarn.
    
    FROM node:18-bullseye-slim
    WORKDIR /home/node/
    
    #Para evitar que cuando se inicie el contenedor lo haga con root
    USER node
    COPY --chown=node:node . .
    
    RUN yarn set version berry


## BUSTER-SLIM
Viene por defecto con yarn, por lo que tendríamos que cambiar el script setup de nuestra aplicación para eliminar la orden de instalación de yarn.

    FROM node:18.13.0-buster-slim
    WORKDIR /home/node/
    
    #Para evitar que cuando se inicie el contenedor lo haga con root
    USER node
    COPY --chown=node:node . .
    
    RUN yarn set version berry


# DISTROLESS
nonroot es un tag/usuario que nos permite quitar el root al iniciar el contenedor.

    FROM node:18 AS build-env
    WORKDIR /home/node/
    
    COPY --chown=nonroot:nonroot . .
    RUN yarn set version berry
    
    FROM gcr.io/distroless/nodejs18-debian11:nonroot
    WORKDIR /home/node/
    COPY --from=build-env /home/node/ /home/node/


# BASEIMAGE

    FROM phusion/baseimage:jammy-1.0.1
    WORKDIR /home/node/
    
    # Añadimos node ya que si no nos da error USER al no estar en passwd
    # y copia los archivos con dueño root
    # Seleccionamos la versión de Node que queremos utilizar 
    RUN groupadd node && useradd -g node node \
        && curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
        && install_clean nodejs
    
    COPY --chown=node:node . .
    
    RUN npm run setup