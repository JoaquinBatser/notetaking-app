import express from 'express'
import dotenv from 'dotenv'
import authRouter from './routes/authRoutes.js'
import cors from 'cors'

dotenv.config()

const app = express()

app.use('/', authRouter)

app.listen(5000, () => {
  console.log('Server listening on http://localhost:5000')
})
