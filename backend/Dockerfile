FROM node:alpine

WORKDIR /usr/app

COPY src/ ./package.json /usr/app/
COPY ./package-lock.json /usr/app/
COPY src/ /usr/app/
COPY .env /usr/app/


RUN npm install

COPY . /usr/app/

EXPOSE 1111

CMD ["npm","run","start"]
