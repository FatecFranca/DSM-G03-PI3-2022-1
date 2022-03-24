const mongoose = require('mongoose')

module.exports = function(){
    const schema = mongoose.Schema({

        fullname: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true 
        },
        email_confirmed: {
            type: String,
            required: true,
            default: false 
        },
        password_hash: {
            type: String,
            required: true 
        },
        data_regsitred:{
            type: Date, 
            required: true,
            default: Date.now()
        }
            
        })

    return mongoose.model('User', schema, 'users')
}