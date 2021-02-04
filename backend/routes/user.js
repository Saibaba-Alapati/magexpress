const user = require('../controllers/user.controller');
const express = require('express');
const userroute =  express.Router();

userroute.post('/signup',user.create);
userroute.get('/login',user.findOne);
userroute.delete('/:userid/userinfo',user.deleteUserandInfo);
userroute.put('/:userid/userinfo',user.update);
userroute.put('/:userid/userinfo',user.updatePassword);

module.exports =  userroute;