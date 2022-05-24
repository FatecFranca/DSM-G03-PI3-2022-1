const mongoose = require('mongoose')

module.exports = function() {

    const schema = mongoose.Schema({
        fullname: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            index: { unique: true }
        },
        email_confirmed: {
            type: Boolean,
            required: true,
            default: false // valor padrão do atributo
        },
        password_hash: {
            type: String,
            required: true,
            select: false // Campo não aparece em consultas
        },
        date_registered: {
            type: Date,
            required: true,
            default: Date.now() // Valor padrão do campo
        }
    })

    return mongoose.model('User', schema, 'users')
}