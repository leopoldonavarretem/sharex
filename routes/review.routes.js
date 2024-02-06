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
  if (!['Videogame', 'Movie', 'Album', 'Serie', 'Book'].includes(mediaType)) return next(400);

  // Check that the review object is valid
  if (typeof review !== 'string' || review.length < 30 || review.length >=800) req.session.reviewErrors.push("Review must be at minimum 30 and maximum 350 characters.");
  if (typeof rating !== 'number' || 0 > rating || rating > 5 || Number.isNaN(rating)) req.session.reviewErrors.push("Please select a valid rating.");
  if (typeof like !== 'boolean') req.session.reviewErrors.push(`Please select whether you liked the ${mediaType}`);

  // Send the user back to the request if there are any errors
  if (req.session.reviewErrors.length > 0) return res.redirect(`/media/${mediaId}`);

  const rockets = [];
  for(i=0; i < rating; i++) rockets.push(1)
  rating = rockets

  // Create review object
  const newReview = {review, mediaId, like, userId, rating};
  
  try{
    // Create a new Review
    await Review.create(newReview);
    
    return res.redirect(`/media/${mediaId}`);
  }
  catch(err){
    return next(500);
  };
});

//This route will delete the review
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