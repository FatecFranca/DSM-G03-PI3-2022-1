const mongoose = require('mongoose')

module.exports - function(){
    const schema = mongoose.Schema({
        entry:{
            type: String,
            required: true
        },
        defenition:{
            type: String,
            required: true
        }
    })

    //geração do model
    //1° parametro: nome do models (inicial maiuscula)
    //2° parametro: atributos do model (definidos na váriável schema)
    //3° parâmetros: nome da collection no banco de dados (collection em minuscula no plural, um Glossary faz parte dos glossaries)

    return mongoose.model('Glossary', schema, 'glossaries')
}