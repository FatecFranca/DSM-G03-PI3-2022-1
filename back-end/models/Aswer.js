const mongoose = require('mongoose')

module.exports = function(){
    const schema = mongoose.Schema({
        assessment: {
            type:mongoose.ObjectId,
            required: true,
            ref:'Assessment'
        },
        question:{
            type:mongoose.ObjectId,
            required:true,
            ref:'Question'
        },
        /*
        Valores válidos para o objective_answer
        Y: Yes
        N: No
        X: Not Applicable
        P: Postponed (resposta adiada)
        */
        objective_answer:{
            type: String,
            enum: ['Y', 'N', 'X', 'P'],
            required: true
        },
        comments:{
            type: String,
            required: false

        },
        datetime:{
            type: Date,
            required: true,
            default: Date.now()
        }

    })

    return mongoose.model('Answer', schema, 'answers')
}