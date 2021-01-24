const initModels = require('../models/init-models');
const sequelize = require("sequelize");
const models = initModels(sequelize);
const Tracker = models.tracker;
const CategoryContainer = models.categorycontainer;

// Create and Save a new CC
exports.create = (req, res) => {
    // Validate request
    if (!req.body.label) {
        res.status(400).send({
            message: "Label cannot be empty."
        });
        return;
    }
    // Create a CC
    const tcId = req.params.tcId;
    const userId = req.params.userId;
    const categorycontainer = {
        label: req.body.label,
        description: req.body.description,
        creator : userId,
        trackercontainer_id: tcId,
    };
    // Save CC in the database
    CategoryContainer.create(categorycontainer)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Some error occurred while creating the CategoryContainer."
            });
        });
};

// Retrieve all CC from the database.
exports.findAllCCOfTC = (req, res) => {
    const tcId = req.params.tcId;
    CategoryContainer.findAll({where:{trackercontainer : tcId}})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving category containers."
            });
        });
    };

// Find all trackers realted to categorycontainer
exports.findAllTrackersOfCC = (req, res) => {
    const ccId = req.params.ccId;
    Tracker.findAll({where:{categorycontainer : ccId}})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving trackers."
            });
        });
};

//Moving tracker from one categorycontainer to othercategorycontainer
exports.moveToOtherCC = (req, res) => {
    const otherccId = req.body.otherccId
    const trackerId = req.params.trackerId
    Tracker.update({categorycontainer: otherccId},{where:{id: trackerId}})
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

// Update a CategoryContainer by the id in the request
exports.updateCC = (req, res) => {
    CategoryContainer.update({label:req.body.label,description: req.body.description},{where: {id: req.params.ccId},returning : true,plain:true})
        .then(data =>{
            res.send(data);
        })
        .catch(err =>{
            res.status(500).send({
                message:"Cannot perform the operations due to following error" + err
            })
        })
};
//Delete CC along with Trackers
exports.deleteCCWithTrackers = (req, res) => {
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
    CategoryContainer.destroy({where:{id : ccId}})
        .then(num =>{
            if(num === 1){
                res.send({
                    message: "Deletion was successful."
                });
            }else{
                res.send({
                    message: "Failed to Delete."
                });
            }})
            .catch(err =>{
                res.status(500).send({
                    message: "Couldn't find the container."
                });
            })
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