import express from 'express'
import { Router } from 'express'
import test from '../controllers/controller.js'
import cors from 'cors'

const authRouter = Router()

authRouter.use(
  cors({
    credentials: true,
    origin: 'http://localhost:5173',
  })
)

authRouter.get('/', test)

export default authRouter
