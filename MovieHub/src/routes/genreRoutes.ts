import express from 'express'
import { addGenre  , removeGenre } from '../controllers/genreControllers'

const route = express.Router()

route.post('/add', addGenre)
route.post('/remove', removeGenre  )

export {  route as genreRoutes  }