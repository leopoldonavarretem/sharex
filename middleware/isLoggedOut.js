module.exports = (req, res, next) => {
    // Checks if the user is logged in
    if (req.session.user) {
      return res.redirect('/');
    }
    next();
  };
  