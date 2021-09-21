<h1 align="center">STACK DESENVOLVIMENTO BASEADA EM DOCKER PROJETO ATELIÊ</h1>
Proposta de ambiente de desenvolvimento baseado em Docker e Docker-Compose para facilitar o criação e provisionamento (deploy) de aplicações no Projeto Ateliê do Software.

Um hipótese é tornar esse repositório uma espécie de boirlerplate ou modelo para as próximas fases do projeto, ou seja, para além da organização dos códigos no projeto seguindo boas práticas, podemos centralizar aqui aspectos relacionados a documentação e aprendizagens.

## Estrutura básicas das pastas

### frontend 
Esta é a pasta principal para o período 2021 do projeto, no qual focaremos no frontend da aplicação Web usando tecnologias como o framewrok progressivo Vue, Javascript, CSS e HTML.
> Note que dentro da pasta, além dos códigos da aplicação temos o Dockerfile que constrói o ambiente em docker.
### backend
Num primeiro momento, o backend aproveita os códigos em NodeJS de interação com a base de dados LDAP, desenvolvido em outro projeto do campus.
> A ideia é que esse backend e suas rotas seja consultado pelo frontend em desenvolvimento no projeto Ateliê
### bd
Este diretório deverá ser útil para centralizar os dados de banco de dados, se for o caso. Por hora não é prioritário.
### docs
Este é um diretório que merece atenção. A ideia é documentarmos todo o nosso processo.
<hr>
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
- [ ] Validar se o código está agnóstico, ou seja, funciona independente da plataforma (OpenLDAP, Samba4, AD)
- [ ] Ver como personalizar a porta default do backend para consulta LDAP ( hoje só tem opção pela 389) 

## License

MIT
set-inform 172.19.0.3:8080/inform