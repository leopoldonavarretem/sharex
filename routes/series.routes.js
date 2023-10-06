// Imports
const router = require("express").Router();
const Serie = require('../models/Serie.model');

// Middleware Imports
const isLoggedIn = require('../middleware/isLoggedIn');

// This route will show all the series 
router.get('/', (req, res)=>{
  Serie.find()
    .then((seriesData)=>{
        res.render('media/series', {seriesData}) 
    })
    .catch(console.log)
});

//This route will show you a single serie 
router.get('/:serie', isLoggedIn, (req, res)=>{

})
// This route will create a new serie 
router.post('/:serie', isLoggedIn, (req,res)=>{

})

// This route will update the serie 
router.patch('/:serie', isLoggedIn, (req, res)=>{

})

//This route will delete the serie 
router.delete('/:serie', isLoggedIn, (req, res)=>{

})

module.exports = router;