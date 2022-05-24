const mongoose = require('mongoose')

module.exports = function() {

    const schema = mongoose.Schema({
        group: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    })

    return mongoose.model('QuestionGroup', schema, 'question_groups')
}