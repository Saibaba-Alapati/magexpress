module.exports.checkAuthenticated = function checkAuthenticated(req,res,next) {
    if(req.isAuthenticated()){
        return next()
    }
}
module.exports.checkNotAuthenticated = function checkNotAuthenticated(req,res,next){
    if(req.isAuthenticated()){
        return res.redirect('/')
    }
    next()
}