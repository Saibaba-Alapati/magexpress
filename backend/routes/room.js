const room = require('../controllers/room.controller');
const  express = require('express');
const roomroute = express.Router();

roomroute.post("/:userid/createroom",room.createRoom);
roomroute.get("/:userid/findallrooms",room.findAllRooms);

module.exports = roomroute;