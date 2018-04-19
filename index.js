require('dotenv').config()

// Import Dependencies
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

// Import File
const appRouters = require('./app/routes/index')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api/v1', appRouters)

app.listen(process.env.PORT)