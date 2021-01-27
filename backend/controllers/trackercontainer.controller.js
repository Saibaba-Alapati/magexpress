const TrackerContainer = require('../models/trackercontainer');
const UserAndTCS = require('../models/userandtcs');
const Tracker =  require('../models/tracker');
const TrackerComments = require('../models/trackercomments');
const CategoryContainer = require('../models/categorycontainer');
// Create and Save a new TrackerContainer
exports.create = (req, res) => {
    if(!req.body.name){
        res.status(400).send({
            message : "name cannot be empty."
        });
        return;
    }
    const userId = req.params.userId
    const Trackercontainer = {
        name : req.body.name,
        description : req.body.description,
        creator : userId,
    }
    TrackerContainer.create(Trackercontainer)
        .then(data =>
        {
            UserAndTCS.create({user_id : data.creator,trackercontainer_id : data.id});
            res.send(data);
        })
        .catch(err =>
            res.status(500).send({
                message:
                    err.message || "Some error ocurred TrackerContainer could not be created."
            })
        )
};

// Retrieve all Trackercontainers realted to the user from the database.
exports.findAllContainersRelatedToUser = (req, res) => {
    const userId = req.params.userId;
    const tcId = req.params.tcId;
    UserAndTCS.findAll({where:{user_id: userId,trackercontainer_id:tcId}})
        .then(data=>{
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:"Cannot perform the operations due to following error" + err
            })
        })
};

// Find a single TrackerContainer with an id in the request
exports.findOne = (req, res) => {
    const id = req.params.tcId;
    TrackerContainer.findByPk(id)
        .then(data =>{
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:"Error retrieving the TrackerContainer"
            });
        });
};
exports.joinTrackerContainer = (req, res) => {
    const userId = req.params.userId;
    const tcId = req.params.tcId;
    TrackerContainer.findByPk(tcId)
        .then(data =>{
            UserAndTCS.create({user_id : userId,trackercontainer_id: tcId,trackercontainercreator : data.creator})
                .then(data =>{
                    res.send(data);
                })
                .catch(err => {
                    res.status(500).send({
                        message:"Error retrieving the TrackerContainer"
                    });
                })
        })
        .catch(err => {
            res.status(500).send({
                message:"Error retrieving the TrackerContainer"
            });
        });

}
//check if user has access to tracker container
exports.userAccessCheck = (req,res) => {
    const userId = req.params.userId;
    const tcId = req.params.tcId;
    TrackerContainer.find({where:{user_id: userId,trackercontainer_id: tcId}})
        .then(function(data){
            if(!data){
                return 'user notfound'
            }else{
                const id = req.params.tcId;
                    TrackerContainer.findByPk(id)
                        .then(data =>{
                            res.send(data);
                        })
                        .catch(err => {
                            res.status(500).send({
                                message:"Error retrieving the TrackerContainer"
                            });
                        });
            }
        })
        .catch(err => {
            res.status(500).send({
                message:"Error check for access."
            });
        });
}
// Update a TrackerContainer by the id in the request
exports.update = (req, res) => {
    TrackerContainer.update({name:req.body.name,description: req.body.description},{where: {id: req.params.id},returning : true,plain:true})
        .then(data =>{
            res.send(data);
        })
        .catch(err =>{
            res.status(500).send({
                message:"Cannot perform the operations due to following error" + err
            })
        })
};

// Delete all Trackers from the TrackerContainer.
exports.deleteTCandCCandTRandTCR = (req, res) => {
    const tcId = req.params.tcId;
    TrackerComments.destroy({ trackercontainer: tcId});
    Tracker.destroy({where: {trackercontainer: tcId}});
    CategoryContainer.destroy({where: {trackercontainer: tcId}});
    UserAndTCS.destroy({where: {trackercontainer_id : tcId}});
    TrackerContainer.destroy({where:{id: tcId}})
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