// Imports
const router = require("express").Router();
const Videogame = require('../models/Videogame.model');

// Middleware Imports
const isLoggedIn = require('../middleware/isLoggedIn');

// This route will show all the videogames
router.get('/', (req, res)=>{
  Videogame.find()
    .then((videogamesData)=>{
        res.render('media/videogames', {videogamesData}) 
    })
    .catch(console.log)
});

//This route will show you a single videogame
router.get('/:videogame', isLoggedIn, (req, res)=>{

})
// This route will create a new videogame
router.post('/:videogame', isLoggedIn, (req,res)=>{

})

// This route will update the videogame
router.patch('/:videogame', isLoggedIn, (req, res)=>{

})

//This route will delete the videogame
router.delete('/:videogame', isLoggedIn, (req, res)=>{

})

module.exports = router;