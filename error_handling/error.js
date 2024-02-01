module.exports = (app) => {

  // this middleware runs whenever requested page is not available
  app.use((err, req, res, next) => {
    const userData = req.session.user;
    
    if (err === 400){
      return res.status(err).render('error/requestError', {userData});
    };
    
    if (err === 401){
      return res.status(err).render('error/notAuthorized', {userData});
    };
    
    if(err === 404){
      return res.status(err).render('error/notFound', {userData});
    };

    if(err === 500){
      return res.status(err).render('error/serverError', {userData});
    };

    next()
  });

  app.use((req, res) => {
    const userData = req.session.user;

    return res.status(404).render('error/notFound', {userData});
  });
  
 };
  