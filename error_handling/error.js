module.exports = (app) => {

  // this middleware runs whenever requested page is not available
  app.use((req, res, next) => {
    return res.status(404).render("notFound");
  });

  // This middleware runs whenever there are errors.
  app.use ((err, req, res, next)=>{
    const userData = req.session.user

    if (err === 400){
      return res.status(err).render('error/requestError', {userData});
    };
    
    if (err === 401){
      return res.status(err).render('error/notAuthorized', {userData});
    };

    if(err === 500){
      return res.status(500).render('error/serverError', {userData});
    };

  });
 };
  