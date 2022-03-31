const express = require('express')
const router = express = express.Router()

// Importa o controller correspondente
const controller = require ('../controllers/glossary')

router.post ('/', controller.create)
router.get ('/', controller.retrieve)

module.exports = router