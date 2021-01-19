const express   = require('express');
const router = express.Router();
const io = require('socket.io');
const User = require('../models/user.model');
const DirectMessage = require('../models/messages.model');



