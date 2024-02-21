module.exports = (req, res, next) =>{
    // Checks if the user is an admin
    if(!req.session.user.admin) {
        return res.redirect('/auth/login');
    }
    console.log('hello')
    next();
}