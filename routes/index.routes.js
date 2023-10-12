// Imports
const router = require("express").Router();

// Route imports
const authRoutes = require("./auth.routes");
const reviewRoutes = require('./review.routes');
const adminRoutes = require('./admin.routes');
const mediaRoutes = require("./media.routes");

/* GET home page */
router.get("/", (req, res) => {
  const userData = req.session.user
  return res.render("index", {userData});
});

router.use('/auth', authRoutes);
router.use('/admin', adminRoutes);
router.use('/reviews', reviewRoutes);
router.use('/media', mediaRoutes);

// Export to app
module.exports = router;