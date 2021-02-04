const room = require('../controllers/room.controller');
const  express = require('express');
const roomroute = express.Router();

roomroute.post('/',room.createRoom);
roomroute.get('/',room.findAllRooms);
roomroute.get('/',room.findRoom);
roomroute.get('/:roomid/roominfo',room.updateRoom);
roomroute.delete('/:roomid/roominfo',room.deleteRoom);
roomroute.post('/',room.joinRoom);

module.exports = roomroute;