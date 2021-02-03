const user = require('../controllers/user.controller');
const express = require('express');
const userroute =  express.Router();

userroute.post("/:userid/createuser",user.create);
userroute.get("/:userid/getuser",user.findOne);
userroute.delete("/:userid/deleteuseracount",user.deleteUserandInfo);
userroute.put("/:userid/updateuserinfo",user.update);
userroute.put("/:userid/changepassword",user.updatePassword);

module.exports =  userroute;