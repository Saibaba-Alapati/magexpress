const express = require('express');
const cors = require('cors');
require('dotenv').config();
const session = require("express-session");
const passport = require('passport');
const cookieParser = require('cookie-parser');
// const userroute = require('./routes/user')
const trackerroute = require('./routes/tracker');
const categorycontainerroute = require('./routes/categorycontainer');
const trackercontainerroute = require('./routes/trackercontainer');
const directchatroute = require('./routes/directchat');
const roomroute = require('./routes/room');
const userroute = require('./routes/user');
const channelroute = require('./routes/channel');
//app
const app = express();
//db
const db = require('./models/database')
db.authenticate()
    .then(() => console.log('Database Connected......'))
    .catch(err => console.log('Error: ' + err))
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
app.use('/api/',userroute);
app.use('/api/:userid',trackercontainerroute);
app.use('/api/:userid/:trackercontainerid',categorycontainerroute);
app.use('/api/:userid/:trackercontainerid',trackerroute);
app.use('/api/:userid',roomroute);
app.use('/api/:userid/:roomid',channelroute);
app.use('/api/:userid',directchatroute);


app.listen(PORT, () =>{
    console.log(`The server is running on ${PORT}`);
})
app.delete('/logout',(req,res)=>{
    req.logOut()
    res.redirect('/login')
})

