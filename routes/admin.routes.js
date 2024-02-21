// Imports
const router = require('express').Router();
const {Types: {ObjectId}} = require('mongoose');
const uploadFile = require("../config/cloudinary.config");

// Import Models
const Media = require('../models/Media.model');

// Middleware Imports
const isLoggedIn = require('../middleware/isLoggedIn');
const isAdmin = require('../middleware/isAdmin');

// Functions
const isValidObjectId = (id) => ObjectId.isValid(id) && (new Object(id)).toString() === id;

// Access to admin page
router.get('/', isLoggedIn, isAdmin, (req,res)=>{

  // Get the required data
  const userData = req.session.user;
  const errorMessage = req.session.mediaErrors;
  const successMessage = req.session.mediaSuccess;

  if(errorMessage) delete req.session.mediaErrors;
  if(successMessage) delete req.session.mediaSuccess;

  res.render('admin/console', {userData, errorMessage, successMessage});
})

// Create media
router.post('/hello', isLoggedIn, isAdmin, uploadFile.single('imageUrl'), async (req, res, next)=>{
  console.log('error')

  // Destructuring the request
  let {mediaName, description, genre, year, creator, mediaType} = req.body;
  const { path } = req.file ? req.file : [];
  
  // Transform the data
  year = Number(year);

  // Validate data
  req.session.mediaErrors = [];
  
  // Check that the informaton is valid
  if (typeof mediaName !== 'string') req.session.mediaErrors.push('Media Name must be of type string.');
  if (typeof description !== 'string') req.session.mediaErrors.push('Description must be of type string.');
  if (typeof genre !== 'string') req.session.mediaErrors.push('Genre can only be of type string.');
  if (typeof year !== 'number' || year < 0 || year > 2050 ) req.session.mediaErrors.push('Input a valid year.');
  if (typeof creator !== 'string') req.session.mediaErrors.push('Creator must be of type string.');
  if (typeof path !== 'string') req.session.mediaErrors.push('Image must be uploaded.');
  if(!['Book', 'Videogame', 'Movie', 'Serie', 'Album'].includes(mediaType)) req.session.mediaErrors.push('Input a valid Media Type.');
  
  console.log(req.session.mediaErrors)
  // Send the user back to the request if there are any errors
  if (req.session.mediaErrors.length > 0)  return res.redirect(`/admin`);
  
  // Create videogame object
  const newMedia = {mediaName, description, genre, year, creator, mediaType, imageUrl: path};

  try{
    console.log('hheeello')
    await Media.create(newMedia);

    req.session.mediaSuccess = `${mediaType}: ${mediaName} has been successfully created.`
  
    return res.redirect('/admin');
  }
  catch(err){
    console.log(err)
    next(500);
  };
});

//This route will delete the media
router.post('/delete', isLoggedIn, isAdmin, async (req, res, next)=>{

  const mediaId = req.body.mediaId;

  // Validate data
  req.session.mediaErrors = [];

  // Validate the ObjectId
  if (!isValidObjectId(mediaId)) req.session.mediaErrors.push('Please input a valid Media ID');

  // Send the user back to the request if there are any errors
  if (req.session.mediaErrors.length > 0)  return res.redirect(`/admin`);

  try{
      
    // Delete the Media
    await Media.findByIdAndDelete(req.body.mediaId);

    req.session.mediaSuccess = `Media ID ${req.body.mediaId} deleted succesfully.`

    return res.redirect('/admin');
  }
  catch(err){
    return next(500);
  };
});

module.exports = router;