const Room = require('/Users/saibabaalapati/Desktop/magexpress/backend/models/room');
const UsersAndRooms = require('/Users/saibabaalapati/Desktop/magexpress/backend/models/usersandrooms');
// CREATE AND SAVE ROOM
exports.createRoom = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message:
                " Name cannot be empty. "
        });
        return;
    }
    Room.create({
        creatorid: req.params.userid,
        name: req.body.name,
        description: req.body.description
    })
        .then(data =>{
            UsersAndRooms.create({
                userid : req.params.userid,
                roomid : data.id
            })
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message  :
                    err.message || " Not able to create the room. "
        })
    })
};

// FIND ALL THE ROOMS THAT USER HAS ACCESS TO
exports.findAllRooms = (req, res) => {
    UsersAndRooms.findAll({
        where: {
            userid : req.params.userid
        }
    })
        .then(data =>{
            res.send(data)
        })
        .catch(err =>{res.status(500).send({
            message  :
                err.message || " Not able findall the room that user is part of."
        })
    })
};

// Find a single room with an id
exports.findRoom = (req, res) => {
    Room.findByPk(req.body.roomid)
        .then(data =>{
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message :
                    err.message || " Not able to find the room. "
            })
        })
};
// exports.loadMessage = (req, res) =>{
//     RoomMessage.find({where: { }})
// }
// UPADTE NAME AND DESCRIPION OF ROOM
exports.updateRoom = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message:
                " Name cannot be empty. "
        });
        return;
    }
    Room.update({
        name : req.body.name,
        description : req.body.description
    },
    {
        where:{
            id: req.params.roomid
        }
    })
        .then(data =>{
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message :
                    err.message ||" Not able to update room. "
            })
        })
};

// DELETE A ROOM
exports.deleteRoom = (req, res) => {
    Room.destroy({
        where : {
            id : req.params.roomid
        }
    })
        .then(num => {
            if (num === 1) {
            res.send({
                message:
                    " Deleted room successfully. "
            });
            } else {
            res.send({
                message:
                    " Could not find room. "
            });
            }
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || " Could not delete room. "
            });
        });
};


// JOIN ROOM
exports.joinRoom = (req, res) => {
    UsersAndRooms.create({
        where : {
            userid: req.params.userid,
            roomid: req.body.roomid
        }
    })
        .then(data =>{
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message:
                    err.message ||" Not able join the room. "
            })
        })
};
