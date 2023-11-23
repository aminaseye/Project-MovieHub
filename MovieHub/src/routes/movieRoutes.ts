import express from 'express'
import { addMovie  , removeMovie } from '../controllers/movieControllers'

const route = express.Router()

route.post('/add', addMovie)
route.post('/remove', removeMovie  )

export {  route as movieRoutes  }
