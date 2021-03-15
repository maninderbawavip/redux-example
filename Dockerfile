FROM node:13.12.0-alpine

WORKDIR /app

COPY . ./

RUN npm i

RUN npm run build

RUN npm i -g serve

CMD [ "serve", "-s", "build" ]



