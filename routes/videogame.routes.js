// Imports
const router = require("express").Router();

// Import Models
const Videogame = require('../models/Videogame.model');
const Review = require('../models/Review.model');

// Show all videogames 
router.get('/', async(req, res, next)=>{
  // Get necessary data
  const userData = req.session.user
  try{
    const videogamesData = await Videogame.find()
    return res.render('media/videogames', {videogamesData, userData}) 
  }
  catch(err){
   return next(500) 
  }
});

//This route will show you a single videogame
router.get('/:videogame', async (req, res, next)=> {

  // Get required data
  const userData = req.session.user
  const errorMessage = req.session.reviewErrors
 
  if(errorMessage) delete req.session.reviewErrors

  try{
    const videogameData = await Videogame.findById(req.params.videogame)
    
    const reviewsData = await Review.find({externalId: videogameData._id})
    .populate('userId', 'username')
    .catch(()=>{
      return []
    });
    
    return res.render('media/videogame', {videogameData, userData, errorMessage, reviewsData})
  }
  catch(err){
    next(500)
  }
})

module.exports = router;