import { isEmail } from 'validator';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    firstname: {type: String, required: 'Your first name is required.'},
    lastname: {type: String, required: 'Your last name is required.'},
    username: {type: String, required: true, unique: 'This username is taken.'},
    gender: {type: String,enum:['male','female','rather-not-say'], required: 'Your gender is required.'},
    companyname: String,
    email: {type: String,validate: [ isEmail, 'invalid email' ],required: 'Email address is required'},
    password: {type:String,match:[/[a-zA-Z]/],required:'Password is required.',min:8},
    chatrooms : [{type: mongoose.Schema.Types.ObjectId, ref: 'Chatroom'}],
    roles : [{type: mongoose.Schema.Types.ObjectId, ref: 'Role'}],
    trackercontainers : [{type: mongoose.Schema.Types.ObjectId, ref: 'TrackerContainer'}],
});

module.exports = mongoose.model('User', userSchema);