FROM node:alpine

WORKDIR /usr/app

COPY src/ package*.json .env ./

RUN npm install

COPY . .

EXPOSE 1111

CMD ["npm","run","start"]
