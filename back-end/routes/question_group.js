const express = require('express')
const router = express.Router()
const verifyToken = require('../lib/verify_token')


// Importa o controller correspondente
const controller = require('../controllers/question_group')

router.post('/', verifyToken, controller.create)
router.get('/', controller.retrieve)
router.get('/:id', controller.retrieveOne)
router.put('/', verifyToken, controller.update)
router.delete('/', verifyToken, controller.delete)

module.exports = router
