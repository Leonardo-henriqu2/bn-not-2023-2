import prisma from '../database/client.js'

const controller = {}  //OBjeto vazio

controller.create = async function(req, res) {
    try {
        //COnecta-se ao BD e envia uma instrução
        // de criação de um novo documento, com o
        // dados que estão dentro de req.body
        await prisma.turma.create({data: req.body})

        //Envia uma resposta de sucesso ao front-end
        //HTTP 201: created
        res.status(201).end()
    }
    catch(error) {
        //Deu errado: exibe o erro no console do back-end
        console.error(error)
        // Envia o erro ao front-end, com status 500
        // HTTP 500: Internal Server Error
        res.status(500).send(error)

    }
}

controller.retrieveAll = async function(req, res) {
    try {
        // Manda buscar os dados no servidor
        // Traz ordenado por nome, depois por nivel
        const result = await prisma.turma.findMany({
            orderBy: [
                { nome: 'asc'}, //Ordem ascendente
            ]
        })
        //HTTP 200: OK
        res.send(result)
    }
    catch (error) {
        //Deu errado: exibe o erro no console do back-end
        console.error(error)
        // Envia o erro ao front-end, com status 500
        // HTTP 500: Internal Server Error
        res.status(500).send(error)
    }

    
}
controller.retrieveOne = async function(req, res) {
    try {
        const result = await prisma.turma.findUnique({
            where: { id: req.params.id }
        })

        //Encontrou ~> retorna HTTP 200: OK
        if(result) res.send(result)
        // Não encontrou ~> retorma HTTP 404: NOT found
        else res.status(404).end()
    }
    catch (error) {
        //Deu errado: exibe o erro no console do back-end
        console.error(error)
        // Envia o erro ao front-end, com status 500
        // HTTP 500: Internal Server Error
        res.status(500).send(error)
    }
}

controller.update = async function(req, res) {
    try {
        const result = await prisma.turma.update({
            where: { id: req.params.id },
            data: req.body
        })

        //Encontrou e atualizou ~> retorna HTTP 204: No content
        if(result) res.status(204).end()
        // Não encontrou ( e não atualizou) ~> retorna HTTP 404: NOT found
        else res.status(404).end()
    }
    catch (error) {
        //Deu errado: exibe o erro no console do back-end
        console.error(error)
        // Envia o erro ao front-end, com status 500
        // HTTP 500: Internal Server Error
        res.status(500).send(error)
    }
}
controller.delete = async function(req, res) {
    try {
        const result = await prisma.turma.delete({
            where: { id: req.params.id }
        })

        //Encontrou e excluiu  ~> retorna HTTP 204: No content
        if(result) res.status(204).end()
        // Não encontrou ( e não excluiu) ~> retorna HTTP 404: NOT found
        else res.status(404).end()
    }
    catch (error) {
        //Deu errado: exibe o erro no console do back-end
        console.error(error)
        // Envia o erro ao front-end, com status 500
        // HTTP 500: Internal Server Error
        res.status(500).send(error)
    }
}

export default controller