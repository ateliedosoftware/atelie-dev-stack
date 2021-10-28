
FROM node:12.2.0-alpine
ENV LANG C.UTF-8
WORKDIR /app

# add `/app/node_modules/.bin` para $PATH
ENV PATH /app/node_modules/.bin:$PATH

# instalar e armazenar em cache dependências do app
COPY /package.json /app/package.json

RUN npm install
#RUN npm install @vue/cli 4.5.13
RUN npm install @vue/cli@3.7.0 -g
#RUN vue add router
RUN npm install vue-router

# iniciar app
CMD ["npm", "run", "serve"]
