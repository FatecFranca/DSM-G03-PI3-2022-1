const express = require('express')
const router = express.Router()
const verifyToken = require('../lib/verify_token')

// Importa o controller correspondente
const controller = require('../controllers/assessment')

router.post('/', controller.create)
router.get('/', controller.retrieve)
router.get('/:id', controller.retrieveOne)
router.put('/:id', controller.update)
router.delete('/:id', controller.delete)

module.exports = router
