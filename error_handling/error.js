module.exports = (app) => {

  // this middleware runs whenever requested page is not available
  app.use((req, res, next) => {
    return res.status(404).render("notFound");
  });

  // This middleware runs whenever there are errors.
  app.use ((err, req, res, next)=>{
    if (err === 400){
      return res.status(err).render('error/requestError')
    };
    
    if (err === 401){
      return res.status(err).render('error/notAuthorized')
    };

    if(err === 500){
      return res.status(500).render('error/serverError')
    };

  });
 };
  