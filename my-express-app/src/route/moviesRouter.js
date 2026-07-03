const express = require("express")
const moviesRouter = express.Router()

const {getMovies,
       getMoviesId,
       getMoviesApi,
       getMoviesbyIdApi,
       loggerMiddleware,
       tokenMiddleware,
       checkMovieIdMiddleware,
       timeMiddleware
} = require("../controller/moviesController.js")

moviesRouter.get('/movies',getMoviesApi)


module.exports = {moviesRouter}