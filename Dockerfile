FROM node:8.10

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . /usr/src/app/

RUN  yarn cache clean && yarn install && yarn dev