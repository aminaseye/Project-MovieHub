import express from 'express'
import { createUser, loginUser } from '../controllers/userControllers'
import checkJwt from '../middlewares/checkJwt.middleware'

const route = express.Router()

route.post('/login',loginUser)
route.post('/create',checkJwt, createUser  )

export {  route as userRoutes  }
