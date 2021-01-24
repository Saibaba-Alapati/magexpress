const initModels = require('../models/init-models');
const sequelize = require("sequelize");
const models = initModels(sequelize);
const Tracker = models.tracker;
const TrackerComments = models.trackercomments;
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

// Retrieve all Comments made on the Tracaker from Database.
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

// Find a single Tutorial with an id
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

// Update a Tutorial by the id in the request
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
//Moving tracker form one container to other
exports.moveToOtherCC = (req, res) => {
    const otherccId = req.params.otherccId
    const trackerId = req.params.trackerId
    Tracker.findAll({categorycontainer: otherccId},{where:{tracker: trackerId}})
        .then(num => {
            if(num === 1){
                res.send({
                    message: "Shifted successfully to other category."
                });
            }
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Some error occurred while shifting Tracker."
            });
        });
};
// Delete all Trackers from the TrackerContainer.
exports.deleteAllTrackersFromTC = (req, res) => {
    const tcId = req.params.tcId;
    Tracker.destroy({where:{trackercontainer: tcId}})
        .then(num => {
            if(num === 1){
                res.send({
                    message: "Deleted all trackers of trackercontainer successfully."
                });
            }
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Some error occurred while deleting all Trackers of tracker conatiners."
            });
        });
};

// Delete all Trackers from the CategoryContainer.
exports.deleteAllTrackersFromCC = (req, res) => {
    const ccId = req.params.ccId;
    Tracker.destroy({where:{categorycontainer: ccId}})
        .then(num => {
            if(num === 1){
                res.send({
                    message: "Deleted all trackers of trackercontainer successfully."
                });
            }
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Some error occurred while deleting all Trackers of tracker conatiners."
            });
        });
};