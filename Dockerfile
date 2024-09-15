FROM node:12-alpine as build-step

RUN mkdir -p /web-cv
WORKDIR /web-cv

COPY package.json /web-cv/
RUN npm install

COPY . /web-cv

EXPOSE 3000
ENTRYPOINT ["npx", "gulp"]
