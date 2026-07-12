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

const {readMovie, readMovieById, creatMovie, updateMovie, deleteMovie} = require('../controller/moviesController.js')
const { authJWT } = require("../middleware/auth.js")

moviesRouter.get('/movies', authJWT, readMovie)
moviesRouter.get('/movies/:id', readMovieById)

moviesRouter.post('/movies', creatMovie)
moviesRouter.put('/movies/:id', updateMovie)
moviesRouter.delete('/movies/:id', deleteMovie)

module.exports = {moviesRouter}

