const Tracker = require('../models/tracker')
const TrackerComments = require('../models/trackercomments')
// Create and Save a new TrackerContainer
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a Tracker
    const tracker = {
        reporter: req.params.userId,
        content: req.body.content,
        categorycontainer: req.params.ccId,
        trackercontainer : req.params.tcId
    };
    // Save Tracker in the database
    Tracker.create(tracker)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Tracker."
            });
        });
};

// Retrieve all Comments made on the Tracker from Database.
exports.findAllCommentsOnTracker = (req, res) => {
    const trackerId= req.params.trackerId
    TrackerComments.findAll({where:{tracker: trackerId}})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Some error occurred while loading Comments."
            });
        });
};

// Find a single Tracker with an id
exports.findOne = (req, res) => {
    const trackerId = req.params.trackerId;
    Tracker.findByPk({where:{id:trackerId}})
        .then(data=> {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tracker"
            });
});
};

// Update a Tracker by the id in the request
exports.update = (req, res) => {
    const trackerId = req.params.trackerId;
    Tracker.update({content: req.body.content},{where:{tracker: trackerId},returning:true,plain:true})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Some error occurred while updating Tracker."
            });
        });
};
// Delete a Tracker from database completely
exports.delete = (req, res) => {
    const trackerId = req.params.trackerId
    TrackerComments.destroy({where:{tracker: trackerId}})
        .then(num => {
            if (num === 1) {
            res.send({
                message: "deleted comments on tracker successfully."
            });
            } else {
            res.send({
                message: "can't find tracker."
            });
            }
        })
        .catch(err => {
            res.status(500).send({
            message: "Could not delete comments on tracker"
            });
        });
    Tracker.destroy({where:{tracker: trackerId}})
        .then(num => {
            if(num === 1){
                res.send({
                    message: "Deleted successfully to other category."
                });
            }
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Some error occurred while deleting Tracker."
            });
        });
};
