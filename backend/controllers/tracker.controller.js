const Tracker = require('../models/tracker')
const TrackerComment = require('../models/trackercomment')
// CREATE AND SAVE TRACKER
exports.createTracker = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: " Content can not be empty! "
        });
        return;
    }
    Tracker.create({
        creatorid: req.params.userid,
        trackercontainerid : req.params.trackercontainerid,
        categorycontainerid: req.params.categorycontainerid,
        content: req.body.content
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || " Some error occurred while creating the Tracker. "
            });
        });
};

// FIND ALL COMMENTS ON A TRACKER
exports.findAllCommentsOnTracker = (req, res) => {
    TrackerComment.findAll({
        where:{
            tracker: req.params.trackerid
        }
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || " Some error occurred while loading comments. "
            });
        });
};

// FIND A TRACKER
exports.findOne = (req, res) => {
    Tracker.findByPk({
        where:{
            id:req.params.trackerid
        }
    })
        .then(data=> {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || " Error retrieving tracker. "
            });
});
};

// UPDATE TRACKER CONTENT
exports.update = (req, res) => {
    Tracker.update({
        content: req.body.content
    },{
        where:{
            tracker: req.params.trackerid
        },
        returning:true,
        plain:true
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || " Some error occurred while updating Tracker. "
            });
        });
};
// DELETE A TRACKER
exports.delete = (req, res) => {
    TrackerComment.destroy({
        where:{
            tracker: req.params.trackerid
        }
    })
        .then(num => {
            if (num === 1) {
            res.send({
                message:
                    " Deleted comments on tracker successfully. "
            });
            } else {
            res.send({
                message:
                    " Could not find tracker. "
            });
            }
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || " Could not delete comments on tracker. "
            });
        });
    Tracker.destroy({
        where:{
            id : req.body.id
        }
    })
        .then(num => {
            if(num === 1){
                res.send({
                    message: " Deleted successfully to other category. "
                });
            }
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || " Some error occurred while deleting Tracker. "
            });
        });
};


// DELETE FEW TRACKERS
exports.deleteFew = (req, res) => {
    Tracker.destroy({
        where:{
            id : req.params.trackerids
        }
    })
        .then(num => {
            if (num === 1) {
            res.send({
                message:
                    " Deleted trackers successfully. "
            });
            } else {
            res.send({
                message:
                    "Could not find trackers. "
            });
            }
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || " Could not delete trackers. "
            });
        });
};
