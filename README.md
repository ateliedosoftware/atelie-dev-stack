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
O docker-compose deverá construir localmente a seguinte pilha de serviços.

 * Portainer: console web de gerenciamento de containers que otimiza o acesso as configurações e logs dos containers. Para utilizar acesse https://localhost:9000 (será solicitado o cadastro de administrador)
 * OpenLDAP: uma base OpenLDAP de testes que será utilizada pelo backend da nossa aplicação
 * Ldap-backend: são os artefatos de código do backend de nossa aplicação, que nesse caso implementam uma API Rest com diversas rotas de gerenciamento da base LDAP. 


### Clonando o repositório contendo o docker-compose:

```sh
https://github.com/ifrs-sertao/atelie-dev-stack

```

Renomeie env-example para .env, e altere as variáveis com valores do seu ambiente de DEV.


<strike>
Build docker image:
```sh
docker build -t atelie-dev-stack:v0.1 .
```

Start your container using the docker run:
```sh 
docker container run -d --name atelie-dev-stack:v0.1 -p 1111:1111 atelie-dev-stack
```

To access the documentation (swagger-api), open a browser and enter the following URL.
```sh 
http://localhost:1111/api-docs
```
Here's an example showing the documentation (this a static page, the functions does not works): 
https://ifrs-sertao.github.io/ldap-handler-services/ </strike>

<br/>

## License

MIT
