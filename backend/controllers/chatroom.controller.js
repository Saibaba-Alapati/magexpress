const ChatRoom = require('../models/room');
const UsersAndRooms = require('../models/usersandrooms');
const RoomMessage = require('../models/roommessage')
// Create and Save a new ChatRoom
exports.create = (req, res) => {
    const userId = req.params.userId;
    ChatRoom.create({name: req.body.name,description: req.body.description,creator: userId})
        .then(data =>{res.send(data)})
        .catch(err =>{res.status(500).send({
            message  : "Operations cannot be performed because of this error : "+err
        })})
};

// Retrieve all Chatrrooms the user is in from the database.
exports.findAll = (req, res) => {
    const userId  = req.params.userId;
    UsersAndRooms.findAll({where: {user_id : userId }})
        .then(data =>{res.send(data)})
        .catch(err =>{res.status(500).send({
            message  : "Operations cannot be performed because of this error : "+err
        })})
};

// Find a single Chatroom with an id
exports.findRoom = (req, res) => {
    const chatroomId = req.params.chatroomId;
    ChatRoom.findByPk(chatroomId)
        .then(data =>{res.send(data)})
        .catch(err =>{
            res.status(500).send({
                message : "Cannot perform the operation due to following reasons:" + err
            })
        })
};
exports.loadMessage = (req, res) =>{
    RoomMessage.find({where: { }})
}
// Update a Chatroom by the id in the request
exports.update = (req, res) => {
    const chatroomId  =  req.params.chatroomId;
    ChatRoom.update({name : req.body.name,description : req.body.description},{where:{id: chatroomId}})
        .then(data =>{res.send(data)})
        .catch(err =>{
            res.status(500).send({
                message : "Cannot perform the operation due to following reasons:" + err
            })
        })
};

// Delete a Chatroom with the specified id in the request
exports.delete = (req, res) => {
    const  chatroomId   = req.params.chatroomId;
    ChatRoom.destroy({where : {id : chatroomId }})
        .then(num => {
            if (num === 1) {
            res.send({
                message: "deleted chatroom successfully."
            });
            } else {
            res.send({
                message: "can't find chatroom."
            });
            }
        })
        .catch(err => {
            res.status(500).send({
            message: "Could not delete chatrooms."
            });
        });
    };


// to join the group
exports.joinGroup = (req, res) => {
    const userId = req.params.userId;
    const chatroomId = req.params.chatroomId;
    UsersAndRooms.create({where : {user_id: userId,chatroom_id: chatroomId}})
        .then(data =>{res.send(data)})
        .catch(err =>{
            res.status(500).send({message: "cannot be performed due to following error : "+err})
        })
};
