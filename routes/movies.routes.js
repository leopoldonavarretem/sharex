// Imports
const router = require("express").Router();

// Import models
const Movie = require('../models/Movie.model');
const Review = require('../models/Review.model');

// This route will show all the movies 
router.get('/', async (req, res, next)=>{
  
  // Get necessary data
  const userData = req.session.user;

  try{
    const moviesData = await Movie.find();
    return res.render('media/movies', {moviesData, userData});
  }
  catch(err){
    return next(500);
  }
});

// This route will show a single movie
router.get('/:movie', async (req, res, next)=>{

  // Get required data
  const userData = req.session.user;
  const errorMessage = req.session.reviewErrors;

  if(errorMessage) delete req.session.reviewErrors;

  try{
    const movieData = await Movie.findById(req.params.movie);

    const reviewsData = await Review.find({externalId: movieData._id})
      .populate('userId', 'username')
      .catch(()=>{
        return [];
      });

      return res.render('media/movie', {movieData, userData, errorMessage, reviewsData});
  }
  catch(err){
    next(500);
  }
});

module.exports = router;