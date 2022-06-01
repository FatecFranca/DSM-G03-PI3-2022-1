
const express = require('express')
const router = express.Router()
const verifyToken = require('../lib/verify_token')

// Importa o controller correspondente
const controller = require('../controllers/question')

router.post('/', controller.create)
router.get('/',controller.retrieve)
router.get('/group/:groupId', controller.retrieveByGroup)
router.get('/group-number/:groupId/:number', controller.retrieveByGroupAndNumber)
router.get('/:id', controller.retrieveOne)
router.put('/', controller.update)
router.delete('/', controller.delete)

module.exports = router