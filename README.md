<h1 align="center">STACK DESENVOLVIMENTO BASEADA EM DOCKER PROJETO ATELIÊ</h1>
Proposta de ambiente de desenvolvimento baseado em Docker e Docker-Compose para facilitar o criação e provisionamento (deploy) de aplicações no Projeto Ateliê do Software.

Uma hipótese é tornar esse repositório uma espécie de _boirlerplate_ ou modelo para as próximas fases do projeto, ou seja, para além da organização dos códigos no projeto seguindo boas práticas, podemos centralizar aqui aspectos relacionados a documentação e nossas aprendizagens.

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

## Construir e rodar tela de login com docker-compose
De acordo com docker-compose.yml defino na raíz do projeto:
```
docker-compose up -d --build ambiente-vue
```
![image](https://user-images.githubusercontent.com/6537456/134259215-7b15b59b-1914-4bfb-a965-228d22fdd11f.png)



## Para contribuir com códigos
Como primeira extratégia, podemo seguir os seguintes passos para colaborar com o projeto de modo simples e seguro.

Crie uma nova "feature branch" com a melhoria incorporada:

```shell
git checkout -b feature/login-vue
```
Confere se tá na branch nova(olha o *):
```shel
git branch
```
Adiciona as tuas alterações:
```shell
git add .
```
Faz o commit explicando de forma objetiva e clara o que o código faz:
```shell
git commit -m "Inclui telas de boas vindas e login"
```
Por último faz o push:
```shell
git push origin feature/login-vue
```
Com isso, o responsável pode conferir as mudanças e efetuar o merge.

<hr>

## Mais detalhes sobre a stack
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

# O PROJETO ATELIÊ - eventos e publicações

- [V SEMEPT IFRS - Resumo Pedro A. Machado](https://github.com/ateliedosoftware/atelie-dev-stack/blob/main/docs/publicacoes/resumo_semept2020.md) 
- [V Sertão Aplicado - Resumo Fabricio Covalesci/2020](https://github.com/ateliedosoftware/atelie-dev-stack/blob/main/docs/publicacoes/sertaoaplicado2020.md)


## License

MIT
set-inform 172.19.0.3:8080/inform
