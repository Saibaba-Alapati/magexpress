const DirectMessage = require('/Users/saibabaalapati/Desktop/magexpress/backend/models/directmessage')
// CREATE AND SAVE DIRECT MESSAGE
// modify receiver id logic
exports.createDirectMessage = (req, res) => {
    DirectMessage.create({
        aurthorid : req.params.userid,
        receiverid : req.body.receiverid,
        directchatid : req.params.directchatid,
        content : req.body.content,
        replyid : req.body.replyid,
        privatereplyid : req.body.privatereplyid,
    })
        .then(data =>{
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message:
                    err.message || " Could not create direct message. ",
            })
        })
};

// FIND A DIRECT MESSAGE
exports.findOneDirectMessage = (req, res) => {
    DirectMessage.findOne({
        where: {
            id : req.body.directmessageid
        }
    })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || " Could not find directmessage. " + err,
            })
        })
};

// FIND ALL DIRECT MESSAGES
exports.findAllDirectMessages = (req, res) => {
    DirectMessage.findAll({
        where: {
            directchatid: req.params.directchatid
        }
    })
        .then(data => {
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message:
                    err.message || " Could not find all directmessages of user. " + err,
            })
        })
};


// DELETE A DIRECT MESSAGE
exports.deleteDirectMessage = (req, res) => {
    DirectMessage.destroy({
        where: {
            id: req.body.direchatid
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
                err.message || " Could not delete directmessages. "
            });
        });

};

// DELETE ALL DIRECT MESSAGES
exports.deleteAllDirectMessages = (req, res) => {
    DirectMessage.destroy({
        where: {
            directchatid: req.body.directchatid
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
                err.message || " Could not delete directmessages. "
            });
        });
};

