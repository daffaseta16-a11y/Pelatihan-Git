const express = require("express")
//const readMovie = require("../controller/moviesController")
const moviesRouter = express.Router()

// const {getMovies,
//        getMoviesId,
//        getMoviesApi,
//        getMoviesbyIdApi,
//        loggerMiddleware,
//        tokenMiddleware,
//        checkMovieIdMiddleware,
//        timeMiddleware
// } = require("../controller/moviesController.js")

//moviesRouter.get('/movies',getMoviesApi)
//moviesRouter.get('/movies/:id',getMoviesbyIdApi)

const {readMovie, readMovieById, creatMovie} = require('../controller/moviesController.js')

moviesRouter.get('/movies', readMovie)
moviesRouter.get('/movies/:id', readMovieById)

moviesRouter.post('/movies', creatMovie)

module.exports = {moviesRouter}

