const DirectMessage = require('../models/directmessage')
// Create and Save a new direct message
exports.create = (req, res) => {
    const userId = req.params.userId
    DirectMessage.create({
        creator : userId,
        content : req.body.content,
        receiver : req.body.receiver,
        directchat : req.params.directchatId,
        replyto : req.body.replyto,
        privatereplyto : req.body.privatereplyto,
    })
        .then(data =>{
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message: "Operation not completed due to following error: " + err,
            })
        })
};

// Find a single directmessage with an id
exports.findOne = (req, res) => {
    DirectMessage.findOne({where: {id : req.params.id}})
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: "Operation not completed due to following error: " + err,
            })
        })
};

// Delete a directmessage with the specified id in the request
exports.deleteDirectMessage = (req, res) => {
    DirectMessage.destroy({where: {id: req.body.id}})
        .then(num => {
            if (num === 1) {
            res.send({
                message: "deleted all directmessages successfully."
            });
            } else {
            res.send({
                message: "can't find directmessages."
            });
            }
        })
        .catch(err => {
            res.status(500).send({
            message: "Could not delete directmessages."
            });
        });

};

// Delete all directMessages from the database.
exports.deleteAllMessages = (req, res) => {
    const directchatId = req.params.directchatId;
    DirectMessage.destroy({where: {directchat: req.body.directchat}})
        .then(num => {
            if (num === 1) {
            res.send({
                message: "deleted all directmessages successfully."
            });
            } else {
            res.send({
                message: "can't find directmessages."
            });
            }
        })
        .catch(err => {
            res.status(500).send({
            message: "Could not delete directmessages."
            });
        });
};

// Find all directmessages
exports.findAllDirectMessages = (req, res) => {
    DirectMessage.findAll({where: {directchat: req.params.directchat}})
        .then(data => {
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message: "Operation not completed due to following error: " + err,
            })
        })
};
