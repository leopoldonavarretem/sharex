// Imports
const router = require("express").Router();
const Album = require('../models/Album.model');

// Middleware Imports
const isLoggedIn = require('../middleware/isLoggedIn');

// This route will show all the album 
router.get('/', (req, res)=>{
  Album.find()
    .then((albumsData)=>{
        res.render('media/albums', {albumsData}) 
    })
    .catch(console.log)
});

//This route will show you a single album 
router.get('/:album', isLoggedIn, (req, res)=>{

})
// This route will create a new album 
router.post('/:album', isLoggedIn, (req,res)=>{

})

// This route will update the album 
router.patch('/:album', isLoggedIn, (req, res)=>{

})

//This route will delete the album 
router.delete('/:album', isLoggedIn, (req, res)=>{

})

module.exports = router;