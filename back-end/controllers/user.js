// Importar o model correspondente
const User = require('../models/User')();

const controller = {} // objeto vazio


// Função que será chamada para criar uma nova entrada do glossario.
controller.create = async (req, res) => {
    try {
        await User.create(req.body)
        // HTTP 201: Created
        res.status(201).end()
    }
    catch (error) {
        console.error(error)
        // HTTP 500: Internal Server error
        res.status(500).send(error)
    }
}

// Função que devolve uma listagem das entradas de glossário já inseridas
controller.retrieve = async (req, res) => {
    try {
        const result = await User.find()
        // HTTP 200: OK é implicito aqui
        res.send(result)
    }
    catch (error) {
        console.error(error)
        // HTTP 500: Internal Server error
        res.status(500).send(error)
    }
}

// Função que retorna uma única entrada do glossário com base no id fornecido
controller.retrieveOne = async (req,res) => {
    try {
        const id = req.params.id
        const result = await User.findById(id)
        // Se tivermos um resultado retornamos com status HTTP 200
        if (result) res.send(result)
        // Senão, retornamos HTTP 404: Not Found
        else res.sendStatus(404).end()
    } 
    catch (error) {
        console.error(error)
        // HTTP 500: Internal Server error
        res.status(500).send(error)
    }
}

controller.update = async (req, res) => {
    try {
        const id = req.body.id
        const result = await User.findByIdAndUpdate(id, req.body)
        // HTTP 204: No content
        if (result) res.status(204).end()
        else res.status(404).end()
    }
    catch (error) {
        console.error(error)
        // HTTP 500: Internal Server error
        res.status(500).send(error)
    }
}

controller.delete = async (req,res) => {
    try{
        const id = req.body.id
        const result = await User.findByIdAndDelete(id)

        if(result) res.status(204).end()
        else res.status(404).end()
    }
    catch (error) {
        console.error(error)
        // HTTP 500: Internal Server error
        res.status(500).send(error)
    }
}

module.exports = controller