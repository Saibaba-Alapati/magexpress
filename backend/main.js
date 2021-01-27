const express = require('express');
const cors = require('cors');
require('dotenv').config();
const session = require("express-session");
const passport = require('passport');
const cookieParser = require('cookie-parser');
const db = require('./models/index');
// const userroute = require('./routes/user')
const trackerroute = require('./routes/tracker');
const categorycontainerroute = require('./routes/categorycontainer');
const trackercontainerroute = require('./routes/trackercontainer');
const trackercommentroute = require('./routes/trackercomments');
//app
const app = express();
//db
// db.authenticate()
//     .then(() => console.log('Database Connected......'))
//     .catch(err => console.log('Error: ' + err))
db.sequelize.sync();
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
//routes
// app.use('/api/users',userroute)
app.use('/api/tracker',trackerroute);
app.use('/api/categorycontainer',categorycontainerroute);
app.use('/api/trackercontainer',trackercontainerroute);
app.use('/api/trackercomment',trackercommentroute);
app.listen(PORT, () =>{
    console.log(`The server is running on ${PORT}`);
})
app.delete('/logout',(req,res)=>{
    req.logOut()
    res.redirect('/login')
})

