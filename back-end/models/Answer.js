const mongoose = require('mongoose')

module.exports = function() {

    const schema = mongoose.Schema({
        assessment: {
            type: mongoose.ObjectId,
            required: true,
            ref: 'Assessment'
        },
        question: {
            type: mongoose.ObjectId,
            required: true,
            ref: 'Question'
        },
        /*
            Valores válidos para objective_answer
            Y: Sim (Yes)
            N: Não (No)
            X: Não aplicável (Not Applicable)
            P: Resposta adiada (Postponed)
        */
        objective_answer: {
            type: String,
            enum: ['Y', 'N', 'X', 'P'],
            required: true
        },
        comments : {
            type: String,
            required: false     // opcional
        },
        datetime: {
            type: Date,
            required: true,
            default: Date.now()
        }
    })

    schema.index({assessment: 1, question: 1}, {unique: true})

    return mongoose.model('Answer', schema, 'answers')
}