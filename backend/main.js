const express = require('express');
const cors = require('cors');
require('dotenv').config();
const session = require("express-session");
const passport = require('passport');
const cookieParser = require('cookie-parser');

// IMPORTING ROUTERS
const trackercontainerroute = require('./routes/tracker/trackercontainer');
const categorycontainerroute = require('./routes/tracker/categorycontainer');
const trackerroute = require('./routes/tracker/tracker');
const directchatroute = require('./routes/communications/directchats/directchat');
const roomroute = require('./routes/communications/rooms/room');
const channelroute = require('./routes/communications/rooms/channel');
const userroute = require('./routes/user/user');

//app
const app = express();
//db
const db = require('./models/database')
db.authenticate()
    .then(() => console.log('Database Connected......'))
    .catch(err => console.log('Error: ' + err))
//middlewares
app.use(cors)
    .use(express.static("public"))
    .use(express.json())
    .use(cookieParser)
    .use(express.urlencoded({extended: true}))
    .use(session({
        name: process.env.SESS_NAME,
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge:null,
            sameSite:true,
        }
    }))
    .use(passport.session())
    .use(passport.initialize())
const PORT = process.env.PORT || 8000;
//routes
app.use('/api/',userroute)
    .use('/api/:userid',trackercontainerroute)
    .use('/api/:userid/:trackercontainerid',categorycontainerroute)
    .use('/api/:userid/:trackercontainerid',trackerroute)
    .use('/api/:userid',roomroute)
    .use('/api/:userid/:roomid',channelroute)
    .use('/api/:userid',directchatroute);


app.listen(PORT, () =>{
    console.log(`The server is running on ${PORT}`);
})
app.delete('/logout',(req,res)=>{
    req.logOut()
    res.redirect('/login')
})

