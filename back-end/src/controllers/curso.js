import prisma from '../database/client.js'

const controller = {}  //OBjeto vazio

controller.create = async function(req, res) {
    try {
        //COnecta-se ao BD e envia uma instrução
        // de criação de um novo documento, com o
        // dados que estão dentro de req.body
        await prisma.curso.create({data: req.body})

        //Envia uma resposta de sucesso ao front-end
        //HTTP 201: created
        res.status(201).end()
    }
    catch(error) {
        //Deu errad: exibe o erro no console do back-end
        console.error(error)
        // Envia o erro ao front-end, com status 500
        // HTTP 500: Internal Server Error
        res.status(500).send(error)

    }
}

export default controller