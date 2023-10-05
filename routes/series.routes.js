// Imports
const router = require('express').Router();
const fileUploader = require("../config/cloudinary.config");

//Middleware Imports
const isLoggedIn = require('../middleware/isLoggedIn');

//ROUTER CREATE-NEW-MEDIA
router.get("/create-new-media", isLoggedIn, (req, res, next) => {
  res.render("media/create-new-media");
});

router.post(
  "/create-new-media",
  isLoggedIn,
  fileUploader.single("imageUrl"),
  (req, res, next) => {
    const { path } = req.file;
    Media.create({ ...req.body, imageUrl: path })
      .then((newMedia) => {
        if (newMedia.category === "Documentary") {
          res.redirect("/media/documentaries");
        } else if (newMedia.category === "Anime") {
          res.redirect("/media/anime");
        } else if (newMedia.category === "Music") {
          res.redirect("/media/music");
        } else if (newMedia.category === "Movie") {
          res.redirect("/media/movies");
        }
      })
      .catch(console.log);
  }
);

router.post("/:media", isLoggedIn, (req, res, next) => {
  Review.create(req.body).then(res.redirect("/#")).catch(console.log);
});

//ROUTER FOR INDIVIDUAL MEDIA
router.get("/:media", (req, res, next) => {
  const mediaId = req.params.media;
  const userData = req.session.user;
  Media.findById(`${mediaId}`)
    .then((mediaData) => {
      Review.find({ media_Id: `${mediaId}` })
        .then((reviewData) => {
          res.render("media/media-page", { mediaData, reviewData, userData});
        })
        .catch(console.log);
    })
    .catch(console.log);
});


router.get("/anime", (req, res, next) => {
  Media.find({ category: "Anime" })
    .then((animesData) => {
      animesData.forEach((data) => {
        data.description = data.description.slice(0, 100) + "...";
      });
      res.render("media/anime", { animesData });
    })
    .catch(console.log);
});

module.exports = router;