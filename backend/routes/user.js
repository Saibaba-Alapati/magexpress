const user = require('../controllers/user.controller');
const express = require('express');
const userroute =  express.Router();

userroute.post("/:userId/createuser",user.create);
userroute.get("/:userId/getuser",user.findOne);
userroute.delete("/:userId/deleteuseracount",user.deleteUserandInfo);
userroute.put("/:userId/updateuserinfo",user.update);
userroute.put("/:userId/changepassword",user.updatePassword);
