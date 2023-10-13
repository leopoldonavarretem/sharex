// Imports
const router = require("express").Router();
const {Types: {ObjectId}} = require('mongoose');

// Import Models
const Review = require('../models/Review.model');

// Middleware Imports
const isLoggedIn = require('../middleware/isLoggedIn');

// Functions
const isValidObjectId = (id) => ObjectId.isValid(id) && (new Object(id)).toString() === id;

// This route will create a new review 
router.post('/', isLoggedIn, async (req,res, next)=>{
  
  // Destructuring the request
  let {review, rating, mediaId, like, mediaType} = req.body; 
  const userId = req.session.user._id;
  
  // Transform data
  like = like === 'on' ? true : false;
  rating = Number(rating);

  // Validate data
  req.session.reviewErrors = [];

  //Check that it is a valid external Id
  if (!isValidObjectId(mediaId)) return next(400);
  if (!['Videogame', 'Movie', 'Album', 'serie', 'Book'].includes(mediaType)) return next(400);

  // Check that the review object is valid
  if (typeof review !== 'string' || review.length < 30) req.session.reviewErrors.push("Review must only include text and a minimum length of 30");
  if (typeof rating !== 'number' || 0>rating || rating>5) req.session.reviewErrors.push("Rating can only be a number and must at a minimum 0 and maximum 5");
  if (typeof like !== 'boolean') req.session.reviewErrors.push('Like can only be true or false');

  // Send the user back to the request if there are any errors
  if (req.session.reviewErrors.length > 0) return res.redirect(`/media/${mediaId}`);
  
  // Create review object
  const newReview = {review, rating, mediaId, like, userId};

  try{    
    // Create a new Review
    await Review.create(newReview);
    
    return res.redirect(`/media/${mediaId}`);
  }
  catch(err){
    return next(500);
  };
});

//This route will delete the movie 
router.get('/:reviewId', isLoggedIn, async(req, res, next)=>{
  // Destructuring the request
  const user = req.session.user;
  
  // Validate the ObjectId
  if (!isValidObjectId(req.params.reviewId)) return next(400);

  try{
    // Request the review
    const review = await Review.findById(req.params.reviewId).sort({createdAt : -1})
      .populate('userId', 'username');

    // Validate that the owner is deleting it
    if (review.userId.username !== user.username) return next(401) 
      
    // Delete the Review
    await Review.findByIdAndDelete(req.params.reviewId)
    
    return res.redirect(`/users/${user._id}`)
  }
  catch(err){
    return next(500)
  };
});

module.exports = router;