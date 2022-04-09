const mongoose = require('mongoose')
const QuestionGroup = require('./QuestionGroup')

module.exports = function(){
    const schema = mongoose.Schema({
        number: {
            type: Number,
            required: true
        },
        enunciation: {
            type: String,
            required: true
        },
        //FK para QuestionGroup
        group: {
            type: mongoose.ObjectId,
            ref: 'QuestionGroup',
            required: true
        }
    })

    //Criando um indice unico para os campos group e number
    schema.index({group: 1 /*ASC*/, number: 1 /*ASC*/}, {unique: true})
    
    return mongoose.model('Question', schema, 'questions')

}