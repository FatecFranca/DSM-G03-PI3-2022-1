const express = require('express')
const router = express.Router()

// Importa o controller correspondente
const controller = require ('../controllers/login')

router.post ('/', controller.login)



module.exports = router