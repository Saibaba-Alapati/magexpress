const express = require('express');
const cors = require('cors');
const {Client } = require('pg')
require('dotenv').config();
const session = require("express-session");
const passport = require('passport');
const cookieParser = require('cookie-parser');
//app
const app = express();
//db
const client = new Client({
    "user": process.env.PG_USERNAME,
    "password": process.env.PG_PASSWORD,
    "host": process.env.PG_HOST,
    "port" : process.env.PG_PORT,
    "database" : process.env.PG_DATABASE
})
client.connect((err)=>{
    if(err){
        console.log("connection error,")
    }else{
        console.log('connected successfully')
    }
})
//middlewares
app.use(cors);
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser)
app.use(express.urlencoded({extended: true}));
app.use(session({
    name: process.env.SESS_NAME,
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge:null,
        sameSite:true,
    }
}));
app.use(passport.session());
app.use(passport.initialize());
const PORT = process.env.PORT || 8000;

app.listen(PORT, () =>{
    console.log(`The server is running on ${PORT}`);
})
app.delete('/logout',(req,res)=>{
    req.logOut()
    res.redirect('/login')
})

