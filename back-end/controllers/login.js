const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const controller = {} //objeto vazio

controller.login = async (req, res) => {
    try {
        //Buscar o usuário
        const user = await User.findOne({ email: req.body.email })
        if (!user) {
            //Usuário não encontrado
            //HTTP 401: Unauthorized
            res.status(401).end()
        } else {
            bcrypt.compare(req.body.password, user.password_hash), function (err, result) {
                if (result) {
                    // A senha bate
                    // expiresIn: prazo de validade do token em segundos
                    const token = jwt.sign({ id: user._id },
                        process.env.SECRET, { expiresIn: 3600 })
                        // Resposta com HTTP implícito
                        res.json({auth: true, token})// token: token (como os dois coincidem pode-se abreviar e usar apenas um)
                } else {
                    // A senha não bate
                    //HTTP 401: Unauthorized
                    res.status(401).end()
                }
            }

        }
    } catch (error) {

    }
}

module.exports = controller