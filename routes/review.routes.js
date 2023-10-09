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
router.post('/', isLoggedIn, (req,res)=>{

  // Destructuring the request
  let {review, rating, externalId, like, mediaType} = req.body 
  const userId = req.session.user._id;
  
  // Transform data
  like = like === 'on' ? true : false;
  rating = Number(rating);

  // Validate data
  req.session.errors = {}

  //Check that it is a valid external Id
  if (!isValidObjectId(externalId)) req.session.errors.request = true; 
  if (!['videogames', 'movies', 'albums', 'series'].includes(mediaType)) req.session.errors.request = true;
  
  // Send the request back to home if there are any errors
  if (req.session.errors.request) return res.redirect('/')

  // Check that the review object is valid
  if (typeof review !== 'string') req.session.errors.review = true;
  if (typeof rating !== 'number') req.session.errors.review = true;
  if (typeof like !== 'boolean') req.session.errors.review = true;

  // Send the user back to the request if there are any errors
  if (req.session.errors.review) return res.redirect(`/${mediaType}/${externalId}`)
  
  // Create review object
  const newReview = {review, rating, externalId, like, userId}

  // Create a new Review
  Review.create(newReview)
    .then(() => {return res.redirect(`/${mediaType}/${externalId}`)})
    .catch(() => req.session.errors.server = true)

    //Send the user back to home page if server error
  return res.redirect('/')
});

//This route will delete the movie 
router.get('/:reviewId', isLoggedIn, async(req, res)=>{
  // Destructuring the request
  const user = req.session.user;

  // Validate data
  req.session.errors = {}

  // Validate the ObjectId
  if (!isValidObjectId(req.params.reviewId)) req.session.errors.request = true;

  // Send the request back to home if there are any errors
  if (req.session.errors.request) return res.redirect('/');

  // Request the review
  const review = await Review.findById(req.params.reviewId)
    .populate('userId', 'username')
    .catch(()=> req.session.errors.server = true)

  //Send the user back to home page if server error
  if (req.session.errors.server) return res.redirect('/')

  // Validate that the review exists
  if (!review) req.session.errors.review = true;

  // Send the request back to home if the review doesn't exist
  if (req.session.errors.review) return res.redirect(`/users/${user._id}`); 

  // Validate that the owner is deleting it
  if (review.userId.username !== user.username) req.session.errors.authorization = true; 

  // Send the user back to their homepage if there's an error
  if (req.session.errors.authorization) return res.redirect(`/users/${user._id}`);

  // Finally delete the Review
  Review.findByIdAndDelete(req.params.reviewId)
    .then(()=>{return res.redirect(`/users/${user._id}`)})
    .catch(()=>req.session.errors.server = true)
  
    return res.redirect(`/users/${user._id}`);
});

module.exports = router;