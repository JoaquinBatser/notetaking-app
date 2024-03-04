import express from 'express'
import dotenv from 'dotenv'
import noteRouter from './routes/noteRouter.js'
import mongoose from 'mongoose'
import cors from 'cors'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 8080
const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017'
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', noteRouter)

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})

const environment = async () => {
  try {
    await mongoose.connect(DB_URL)
    console.log('DataBase Connected', DB_URL)
  } catch (error) {
    console.log(error)
  }
}
environment()
