const RoomMessage = require('/Users/saibabaalapati/Desktop/magexpress/backend/models/roommessage')
const Channel = require('/Users/saibabaalapati/Desktop/magexpress/backend/models/channel')

// Create and Save a new Channel
exports.createChannel = (req, res) => {
    // VAlIDATE REQUEST
    if (!req.body.name) {
        res.status(400).send({
            message:
                " Name cannot be empty. "
        });
        return;
    }
    Channel.create({
        creatorid : req.params.userid,
        roomid : req.params.roomid,
        name : req.body.name,
    })
    .then(data =>{
        res.send(data)
    })
    .catch(err =>{
        res.status(500).send({
            message:
                err.message || " Could not create channel. "
        })
    })

};

// Retrieve all channels of a room from the database.
exports.findAllChannels = (req, res) => {
    Channel.findAll({
        where: {
            room : req.params.roomid
        }
    })
        .then(data =>{
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message:
                    err.message || " Could not find all channels of room. ",
            })
        })
};

// Find a single channel with an id
exports.findOneChannel = (req, res) => {
    Channel.findOne({
        where: {
            id  : req.body.channelid
        }
    })
        .then(data =>{
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message:
                    err.message || " Could not find channel info. ",
            })
        })
};

// Update a Channel by the id in the request
exports.updateChannel = (req, res) => {
    // VAlIDATE REQUEST
    if (!req.body.name) {
        res.status(400).send({
            message:
                " Name cannot be empty. "
        });
        return;
    }
    Channel.update({
        name : req.body.name
    },
    {
        where: {
            id  : req.body.channelid
        }
    })
};

exports.deleteChannel = (req, res) => {
    RoomMessage.destroy({
        where: {
            channelid: req.params.channelid
        }
    })
        .then(num => {
            if (num === 1) {
            res.send({
                message:
                    " Deleted all directmessages successfully. "
            });
            } else {
            res.send({
                message:
                    " Could not find directmessages. "
            });
            }
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message ||" Could not delete directmessages. "
            });
        });
    Channel.destroy({where: {id: req.params.channelid}})
        .then(num => {
            if (num === 1) {
            res.send({
                message:
                    " Deleted all directmessages successfully. "
            });
            } else {
            res.send({
                message:
                    " Could not find directmessages. "
            });
            }
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message ||" Could not delete directmessages. "
            });
        });
};