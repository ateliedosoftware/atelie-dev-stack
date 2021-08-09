<h1 align="center">STACK DESENVOLVIMENTO BASEADA EM DOCKER PROJETO ATELIÊ</h1>
Proposta de ambiente de desenvolvimento baseado em Docker e Docker-Compose para facilitar o criação e provisionamento (deploy) de aplicações no Projeto Ateliê do Software.

## Requisitos para máquina de DEV:

    - Docker e Docker Compose
    - Git - Sistema de Versionamento de Códigos
    - NPM ou YANR - Gestão de pacotes NodeJS

## Artefatos de Código
Exemplo de aplicação para construção das imagens Docker e arquivos docker-compose.
### REST API microservice for Active Directory/LDAP implementations.
Neste exemplo, foi usado como backend uma aplicação que se propôes ser uma REST API agnóstica para as diversas implementações LDAP tais como Samba 4, Active Directoty e OpenLDAP.

<br/>
<br/>

## Subindo a stack com Docker Compose

Clone o repositório:

```sh
https://github.com/ifrs-sertao/ldap-handler-services
```

Rename env-example file to .env, and change data.

Change the secret in /src/app/config/auth.json.

Build docker image:
```sh
docker build -t ldap-handler-services .
```

Start your container using the docker run:
```sh 
docker container run -d --name ldap-handler-services -p 1111:1111 ldap-handler-services
```

To access the documentation (swagger-api), open a browser and enter the following URL.
```sh 
http://localhost:1111/api-docs
```
Here's an example showing the documentation (this a static page, the functions does not works): 
https://ifrs-sertao.github.io/ldap-handler-services/ 

<br/>

## License

MIT
