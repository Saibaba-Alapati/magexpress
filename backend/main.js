const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const session = require("express-session");
const passport = require('passport');
//app
const app = express();
//db
const Database = process.env.DATABASE;
mongoose.connect(Database,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true})
const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("MongoDB database connection established successfully");
})
//middlewares
app.use(cors);
app.use(express.static("public"));
app.use(express.json());
app.use(passport.session());
app.use(passport.initialize());
app.use(express.urlencoded({extended: true}));
app.use(session({secret: process.env.SESSION_SECRET,resave: false,saveUninitialized: false}));
//routes
const signupRouter = require('./routes/register');
app.use('/register',signupRouter);
const PORT = process.env.PORT || 8000;

app.listen(PORT, () =>{
    console.log(`The server is running on ${PORT}`);
})
app.delete('/logout',(req,res)=>{
    req.logOut()
    res.redirect('/login')
})
