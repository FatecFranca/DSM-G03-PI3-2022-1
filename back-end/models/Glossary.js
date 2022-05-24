const mongoose = require('mongoose')

module.exports = function() {

    const schema = mongoose.Schema({
        entry: {
            type: String,
            required: true
        },
        definition: {
            type: String,
            required: true
        }
    })

    // Geração do model
    // 1º parâmetro: nome do model (inicial maiúscula)
    // 2º parâmetro: atributos do model (definidos na variável schema)
    // 3º parâmetro: nome da collection no banco de dados
    return mongoose.model('Glossary', schema, 'glossaries')

}