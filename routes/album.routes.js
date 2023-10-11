// Imports
const router = require("express").Router();

// Import models
const Album = require('../models/Album.model');
const Review = require('../models/Review.model');

// This route will show all the album 
router.get('/', async (req, res, next)=>{

  // Get necessary data
  const userData = req.session.user;

  try{
    const albumsData = await Album.find();
    return res.render('media/albums', {albumsData, userData});
  }
  catch(err){
    return next(500);
  }
});

router.get('/:album', async(req, res, next)=>{
  
  // Get required data
  const userData = req.session.user;
  const errorMessage = req.session.reviewErrors;

  if(errorMessage) delete req.session.reviewErrors;

  try{
    const albumData = await Album.findById(req.params.album);

    const reviewsData = await Review.find({externalId: albumData._id})
      .populate('userId', 'username')
      .catch(()=>{
        return [];
      });

      return res.render('media/album', {albumData, userData, errorMessage, reviewsData});
  }
  catch(err){
    next(500);
  };
});

module.exports = router;