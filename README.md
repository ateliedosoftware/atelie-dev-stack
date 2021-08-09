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

## Subindo a stack com Docker Compose
O docker-compose deverá construir localmente a seguinte pilha de serviços.

 * Portainer: console web de gerenciamento de containers que otimiza o acesso as configurações e logs dos containers. Para utilizar acesse https://localhost:9000 (será solicitado o cadastro de administrador)
 * OpenLDAP: uma base OpenLDAP de testes que será utilizada pelo backend da nossa aplicação
 * Ldap-backend: são os artefatos de código do backend de nossa aplicação, que nesse caso implementam uma API Rest com diversas rotas de gerenciamento da base LDAP. 

### Clonando o repositório contendo o docker-compose:

```sh
https://github.com/ifrs-sertao/atelie-dev-stack

```
Renomeie env-example para **.env**, e altere as variáveis  com valores do seu ambiente de DEV.

# TO DO

- [ ] Validar o Bind LDAP na base OpenLDAP
- [ ] Criar testes unitários pra validar a conexão com a base LDAP
- [ ] Validar se o código está agnóstico, ou seja, funciona independente da plataforma (OpenLDAP, Samba4, AD)- [ ] Ver como personalizar a porta default do backend para consulta LDAP ( hoje só tem opção pela 389) 

## License

MIT
