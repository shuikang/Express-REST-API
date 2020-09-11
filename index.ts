import dotenv from 'dotenv'
import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'

import appRouters from './app/routes'
import { ErrorWithStatus } from './@types/error'

dotenv.config

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

// Set route
app.use('/api/v1', appRouters)

// Catch & Handle Error
// Error 404
app.use((request: Request, response: Response, next: NextFunction) => {
  const error: ErrorWithStatus = new Error('Not Found')
  error.status = 404
  next(error)
})

// Error 500 & other
app.use((error: ErrorWithStatus, request: Request, response: Response) => {
  response.status(error.status || 500)
  response.render('error', {
    message: error.message,
    error: error,
  })
})

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`)
})
