const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.send(new Date())
})

router.use('/text', require('./text'))

module.exports = router