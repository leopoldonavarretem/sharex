// Imports
const router = require("express").Router();
const Movie = require('../models/Movie.model');

// Middleware Imports
const isLoggedIn = require('../middleware/isLoggedIn');

// This route will show all the movies 
router.get('/', (req, res)=>{
  Movie.find()
    .then((MoviesData)=>{
        res.render('media/movies', {moviesData}) 
    })
    .catch(console.log)
});

//This route will show you a single movie 
router.get('/:movie', isLoggedIn, (req, res)=>{

})
// This route will create a new movie 
router.post('/:movie', isLoggedIn, (req,res)=>{

})

// This route will update the movie 
router.patch('/:movie', isLoggedIn, (req, res)=>{

})

//This route will delete the movie 
router.delete('/:movie', isLoggedIn, (req, res)=>{

})

module.exports = router;