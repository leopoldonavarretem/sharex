// Imports
const router = require("express").Router();

// Route imports
const authRoutes = require("./auth.routes");
const videoGameRoutes = require("./videogame.routes");
const seriesRoutes = require('./series.routes');
const moviesRoutes = require('./movies.routes');
const albumRoutes = require('./album.routes');

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.use('/auth', authRoutes);
router.use('/videogames', videoGameRoutes);
router.use('./series', seriesRoutes);
router.use('./movies', moviesRoutes);
router.use('./albums', albumRoutes);

// Export to app
module.exports = router;
