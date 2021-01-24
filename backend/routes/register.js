const express   = require('express');
const router = express.Router();

const bcrypt = require('bcrypt');
const passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
router.get('/login', async (req, res) => {
}
);

// router.get('/api/users/:userId')
// router.get('/api/users/:userId/:trackerconatinerId/')
// router.get('/api/users/:userId/:trackerconatinerId/:categorycontainerId')
// router.get('/api/users/:userId/:trackerconatinerId/:categorycontainerId/:tracker')
// router.get('/api/users/:userId1/:directchatId')
// router.get('/api/users/:userId/:chatroomId')
// router.get('/api/users/:userId/:channelId')
module.exports = router;