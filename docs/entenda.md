# Entenda este ambiente de desenvolvimento
Esta stack ultiza Docker para construir a pilha de ferramentas de desenvolvimento utilizadas pelo projeto Ateliê do Software. 

## docker/data/
Este diretório contém os volumes mapeados pelo docker-compose, o que permite a persistência de dados como senha do Portainer e demais ferramentas.

## ./src
O diretório **src** na raiz do projeto contém os códigos-fonte desenvolvido no projeto segmentados.


## Soltos na raiz do projeto estão arquivos úteis para configuração dos ambientes, tais como:

- docker-compose.yml: é o compose que usa o orquestrador Docker-Compose para construir a stack de desenvolvimento
- ldap-backend.Dockerfile: contém o Docker chamado no docker-compose.yml que constrói o backend da API LDAP, feita em NodeJS.
- package*.json: são arquivos que contém as dependências do NodeJS e frameworks
- env.example: um modelo de .env que deve ser alterado antes do build
