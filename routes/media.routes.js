// Imports
const router = require("express").Router();

// Import models
const Media = require('../models/Media.model');
const Review = require('../models/Review.model');

// This route will show all the media 
router.get('/', async (req, res, next)=>{

  // Get necessary data
  const userData = req.session.user;
  const query = req.query.mediaType;
  if(!['Album', 'Serie', 'Book', 'Videogame', 'Movie'].includes(query)) return next(400)

  try{
    const mediasData = await Media.find({mediaType: req.query.mediaType}).sort({year: -1})

    return res.render(`media/medias`, {mediasData, userData, mediaType: req.query.mediaType});
  }
  catch(err){
    return next(500);
  };
});

//This route will show you an individual media
router.get('/:media', async(req, res, next)=>{
  
  // Get required data
  const userData = req.session.user;
  const errorMessage = req.session.reviewErrors;
  const successMessage = req.session.reviewSuccess;

  if(errorMessage) delete req.session.reviewErrors;
  if(successMessage) delete req.session.reviewSuccess;

  try{
    const mediaData = await Media.findById(req.params.media);

    const reviewsData = await Review.find({mediaId: mediaData._id}).sort({year: -1})
      .populate('userId', 'username')
      .lean()
      .catch(()=>{
        return [];
      });
      
    if (userData){
      reviewsData.forEach((media)=>{
        if(userData.admin || userData.username === media.userId.username){
          media.allowDelete = true;
        }})};
      
    return res.render('media/media', {mediaData, userData, errorMessage, successMessage, reviewsData});
  }
  catch(err){
    next(500);
  };
});

module.exports = router;