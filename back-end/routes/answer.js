const express = require('express')
const router = express.Router()
const verifyToken = require('../lib/verify_token')

// Importa o controller correspondente
const controller = require('../controllers/answer')

router.post('/', controller.create)
router.get('/assessment/:id', controller.retrieve)
router.get('/question/:id', controller.retrieveByquestion)
router.get('/:id', controller.retrieveOne)
router.put('/', verifyToken, controller.update)
router.delete('/', verifyToken, controller.delete)

module.exports = router
