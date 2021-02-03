const TrackerContainer = require('../models/trackercontainer');
const UserAndTCS = require('../models/usersandtrackercontainers');
const Tracker =  require('../models/tracker');
const TrackerComments = require('../models/trackercomment');
const CategoryContainer = require('../models/categorycontainer');
// CREATE AND SAVE TRACKER CONTAINER
exports.create = (req, res) => {
    if(!req.body.name){
        res.status(400).send({
            message : "name cannot be empty."
        });
        return;
    }
    TrackerContainer.create({
        name : req.body.name,
        description : req.body.description,
        creatorid : req.params.userid,
    })
        .then(data =>
        {
            UserAndTCS.create({
                userid : data.creator,
                trackercontainerid : data.id
            });
            res.send(data);
        })
        .catch(err =>
            res.status(500).send({
                message:
                    err.message || " Some error ocurred TrackerContainer could not be created. "
            })
        )
};

// FIND ALL TRACKER CONTAINERS USER HAD ACCESS TO
exports.findAllContainersRelatedToUser = (req, res) => {
    UserAndTCS.findAll({
        where:{
            userid: req.params.userid,
            trackercontainerid: req.params.trackercontainerid
        }
    })
        .then(data =>{
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || " Could not find all the trackercotainers user have access to. "
            })
        })
};

// FIND TRACKER CONTAINER
exports.findOne = (req, res) => {
    TrackerContainer.findByPk(req.body.id)
        .then(data =>{
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || " Error retrieving the TrackerContainer. "
            });
        });
};

// JOIN ACCESS TO TRACKER CONTAINER
exports.joinTrackerContainer = (req, res) => {
    TrackerContainer.findByPk(req.params.trackercontainerid)
        .then(data =>{
            UserAndTCS.create({
                userid : req.params.userid,
                trackercontainerid: req.params.trackercontainerid
            })
                .then(data =>{
                    res.send(data);
                })
                .catch(err => {
                    res.status(500).send({
                        message:
                            err.message || " Error retrieving the TrackerContainer"
                    });
                })
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || " Error retrieving the TrackerContainer. "
            });
        });

}
// CHECK USER ACCESS
exports.userAccessCheck = (req,res) => {
    TrackerContainer.find({
        where:{
            userid: req.params.userid,
            trackercontainerid: req.params.trackercontainerid
        }
    })
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
                                message:
                                err.message || "Error retrieving the TrackerContainer"
                            });
                        });
            }
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error check for access."
            });
        });
}
// UPDATE TRACKER CONTAINER NAME
exports.update = (req, res) => {
    // VAlIDATE REQUEST
    if (!req.body.name) {
        res.status(400).send({
            message:
                " Name cannot be empty. "
        });
        return;
    }
    TrackerContainer.update({
        name:req.body.name,
        description: req.body.description
    },
    {
        where: {
            id: req.params.id
        },
        returning : true,
        plain:true
    })
        .then(data =>{
            res.send(data);
        })
        .catch(err =>{
            res.status(500).send({
                message:
                    err.message || " Could not update. "
            })
        })
};

// DELETE ALL TRACKERS FROM TRACKER CONTAINER
exports.deleteTCandCCandTRandTCR = (req, res) => {
    TrackerComments.destroy({ trackercontainerid: req.params.trackercontainerid});
    Tracker.destroy({where: {trackercontainerid: req.params.trackercontainerid}});
    CategoryContainer.destroy({where: {trackercontainerid: req.params.trackercontainerid}});
    UserAndTCS.destroy({where: {trackercontainerid : req.params.trackercontainerid}});
    TrackerContainer.destroy({where:{id: req.params.trackercontainerid}})
        .then(num => {
            if(num === 1){
                res.send({
                    message:
                        " Deleted all trackers of trackercontainer successfully. "
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