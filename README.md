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
