require('dotenv').config()

// Import Dependencies
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')

// Import File
const appRouters = require('./app/routes/index')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(
    session({
        secret: process.env.SECRET_KEY,
        resave: true,
        saveUninitialized: true,
        cookie: { maxAge: 3600000 } // 1 hr
    })
)

// Set route
app.use('/api/v1', appRouters)

// Catch & Handle Error
// Error 404
app.use((req, res, next) => {
    const err = new Error('Not Found')
    err.status = 404
    next(err)
})

// Error 500 & other
app.use((err, req, res) => {
    res.status(err.status || 500)
    res.render('error', {
        message: err.message,
        error: err
    })
})

app.listen(process.env.PORT)