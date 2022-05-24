const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    //Lê o token passado no cabeçalho da requisição
    const token = req.headers['x-access-token']

    //Se o token não existir, retorn 403: Forbidden
    if(! token)res.status(403).send({auth: false, message: 'No token provided'})

    //verifica se o token é válido e está no prazo de validade
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        //Token inválido/exprirado
        if(err) return res.status(403).send({auth: false, message: 'Failed to authenticate token'})

        // O token está Ok!

        // Salva o id na request para uso posterior
        req.authenticatedId = decoded.id

        next() //Chama a pŕoxima função de middleware
    })
}