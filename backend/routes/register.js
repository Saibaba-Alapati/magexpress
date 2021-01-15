const express   = require('express');
var router = express.Router();
const User = require('../models/User.model');
const bcrypt = require('bcrypt');
const passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const { findById } = require('../models/User.model');
const {checkNotAuthenticated} = require('../functions')
passport.use("/",new LocalStrategy(
    function (username,password,done) {
        User.findOne({username: username},function(err,user){
            if (err){
                return done(err);
            }
            if(!user){
                return done(null,false,{message: 'No user has that Username!'});
            }
            user.checkPassword(password,function(err,isMatch){
                if (err){
                    return done(err);
                }
                if(err){
                    return done(null,false,{message: 'Invalid password.'})
                }
            })
        })
    }
));
passport.serializeUser((user, done) => done(null, user.id))
passport.deserializeUser((id, done) => {
    return done(null, findById(id))
})
router.post('/register', checkNotAuthenticated,async (req,res)=>{
    try{
        const check  = await User.findOne({username: req.body.username})
        if(check){
            return res.status(400).json({
                message: 'User with this Username already exists choose a different one.'
            })
        }
        else{
            bcrypt.hash(req.body.password, 10).then((hashedPassword)=>{
                const user = new User({
                    id: (new Date()).getTime().toString(36) + Math.random().toString(36).slice(2),
                    firstname : req.body.firstname,
                    lastname : req.body.lastname,
                    username : req.body.username,
                    gender : req.body.gender,
                    companyname : req.body.companyname,
                    email : req.body.email,
                    password : hashedPassword,
                });
                user.save().then(()=>{
                    res.status(201).json({
                        message: 'User added sucessfully!'
                    });
                }).catch((error)=>{
                    res.status(500).json({
                        error:error
                    });
                })
            })
            res.redirect('/login')
        }
    }catch {
        res.redirect('/register')
    }
});

module.exports = router;