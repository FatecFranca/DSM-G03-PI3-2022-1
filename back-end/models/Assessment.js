const mongoose = require('mongoose')

module.exports = function() {

    const schema = mongoose.Schema({
        datetime: {
            type: Date,
            required: true,
            default: Date.now()
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: false     // atributo opcional
        },
        user: {
            type: mongoose.ObjectId,
            required: true,
            ref: 'User'
        }
    })

    return mongoose.model('Assessment', schema, 'assessments')
}