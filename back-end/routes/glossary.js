const express = require('express')
const router = express.Router()

// Importa o controller correspondente
const controller = require('../controllers/glossary')

router.post('/', verifyToken, controller.create)
router.get('/', verifyToken, controller.retrieve)
router.get('/:id', verifyToken, controller.retrieveOne)
router.put('/', verifyToken, controller.update)
router.delete('/', verifyToken, controller.delete)

module.exports = router
