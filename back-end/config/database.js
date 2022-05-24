const mongoose = require('mongoose')

module.exports = function(){
    mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_SERV}/${process.env.DB_NAME}?retryWrites=true&w=majority`,{
        // Parâmetros de Conexao
        useNewUrlParser: true,
        useUnifiedTopology: true,
        //useFindAndModify:false -- não se usa mais
    })

    mongoose.connection.on('connected', () => 
        console.log('** Mongoose! conectado ao servidor remoto')
    )

    mongoose.connection.on ('error', erro =>
        console.log(`*** ERRO: Mongoose! Não conectado ao servidor remoto.\n Causa: ${erro}`)
    )
}