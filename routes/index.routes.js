// Imports
const router = require("express").Router();

// Route imports
const authRoutes = require("./auth.routes");
const videoGameRoutes = require("./videogame.routes");
const seriesRoutes = require('./series.routes');
const moviesRoutes = require('./movies.routes');
const albumRoutes = require('./album.routes');
const reviewRoutes = require('./review.routes');
const adminRoutes = require('./admin.routes')

/* GET home page */
router.get("/", (req, res) => {
  const userData = req.session.user
  return res.render("index", {userData});
});

router.use('/auth', authRoutes);
router.use('/admin', adminRoutes);
router.use('/reviews', reviewRoutes);
router.use('/videogames', videoGameRoutes);
router.use('/series', seriesRoutes);
router.use('/movies', moviesRoutes);
router.use('/albums', albumRoutes);

// Export to app
module.exports = router;