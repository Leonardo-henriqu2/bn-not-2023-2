PROJETO BACK-END
=======================

# Para iniciar o projeto (nome: back-end)

`npx @aka-demy/create-express-app`
* _Install package...?_: y
* _Name: back-end
* _Language: Java Script
* _Template engine: None
* _Package manager_: npm

# Mudando para a pasta do projeto 
`cd back-end`

# Atualizando pacotes vulneráveis com atualizações de segurança
`npm audit fix --force`

# Install o Prisma com conector para MongoDB
`npx prisma init --datasource-provider mongodb`
* Instale a extensão Prisma no Visual Studio Code

# Adicionando o PrismaClient ao projeto
`npm install @prisma/client`

# Gerando o cliente do Prisma
`npx prisma generate`
* Precisa ser executado **toda vez** que o arquivo `schema.prisma ` for alterado

# Exibindo os dados cadastrados com o Prisma Studio
`npx prisma studio`
* Deve ser executado em um segundo terminal, enquando o projeto está sendo executado no primeiro

## Criando um novo CRUD a partir do outro já existente

### _Controller_
1. Copie o arquivo do _controller_ e renomeie-o de acordo com a nova eentidade para a qual será feito o novo CRUD
2. Substitua (`Ctrl+H`) todas as ocorrências de `prisma.xxxx` por `prisma.yyyy`, onde `xxxx` é o nome da entidade antiga e `yyyy` é o nome da entidade nova.
3. Verifique no método `retrieveAll()` do _controller_, se há campos sendo usados no _orderBy_ e substitua-os conforme a nova entidade.

### _Route_
1. Copie o arquivo do _route (`Ctrl+C Ctrl+V`) e renomeie-o de com a nova entidade para a qual está sendo feito o CRUD.
2. Na linha de `import` do _controller_, substitua o nome da entidade antiga pelo o nome da entidade nova.

### Arquivo `app.js`
1. Na parte inferior do arquivo, na seção de rotas, copie e cole as duas linhas correspondentes a uma rota já existente e faça as substituições necessárias.
    * São quatro **quatro substituições** ao todo, duas em cada linha.

