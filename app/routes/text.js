const express = require('express')

const textController = require('../controllers/text')

const router = express.Router()

router.get('/', textController.getAll)

module.exports = router