const express = require('express')

const textController = require('../controllers/text')

const router = express.Router()

router.get('/', textController.getAll)
router.get('/:id', textController.get)
router.post('/', textController.create)
router.put('/:id', textController.update)
router.delete('/:id', textController.del)

module.exports = router