// const express   = require('express');
// const router = express.Router();
// const initModels = require('../models/init-models');
// const sequelize = require("sequelize");
// const models = initModels(sequelize);
// const User = models.person;
// const bcrypt = require('bcrypt');
// const passport = require('passport');
// var LocalStrategy = require('passport-local').Strategy;
// const { idText } = require('typescript');
// router.get('/login', async (req, res) => {
//     User.find({where: {user_name : req.body.user_name}})
//         .then(user=>{
//             if(user){
//                 bcrypt.compare(req.body.password, user.password, function(err, res) {
//                     if (err){
//                       // handle error
//                     }
//                     })
//         }
// }
// );
