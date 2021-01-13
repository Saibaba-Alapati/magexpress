const mongoose = require('mongoose');
const joi = require('joi');
const joigoose = require('joigoose')(mongoose);

const joiUserSchema = joi.object().keys({
    firstname: joi.string().required(),
    lastname: joi.string().required(),
    username: joi.string().required(),
    gender: joi.string().required(),
    companyname: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().min(8).regex(/[a-zA-Z]/).required(),
    repeatpassword:joi.string().required().valid(joi.ref('password')).options({language: {any: {allowOnly: '!!Passwords do not match',}}}),
})
var userSchema = new mongoose.Schema(joigoose.convert(joiUserSchema));