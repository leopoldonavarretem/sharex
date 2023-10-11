// Imports
const router = require("express").Router();

// Import models
const Serie = require('../models/Serie.model');
const Review = require('../models/Review.model');

// This route will show all the series 
router.get('/', async (req, res, next)=>{
  
  // Get necessary data
  const userData = req.session.user;

  try{
    const seriesData = await Serie.find();
    return res.render('media/series', {seriesData, userData});
    }
  catch(err){
    return next(500);
  };
});

// This route will show a single serie
router.get('/:serie', async (req, res, next)=>{

  // Get required data
  const userData = req.session.user;
  const errorMessage = req.session.reviewErrors;

  if(errorMessage) delete req.session.reviewErrors;

  try{
    const serieData = await Serie.findById(req.params.serie);
    
    const reviewsData = await Review.find({externalId: reviewData._id})
      .populate('userId', 'username')
      .catch(()=>{
        return [];
      });

      return res.render('media/serie', {serieData, userData, errorMessage, reviewsData});
  }
  catch(err){
    next(500);
  };
});

module.exports = router;