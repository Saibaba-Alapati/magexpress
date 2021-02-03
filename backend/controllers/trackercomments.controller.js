const TrackerComments = require('../models/trackercomment');
// CREATE A TRACKER CONTAINER
exports.create = (req, res) =>{
    // VAlIDATE REQUEST
    if (!req.body.content) {
        res.status(400).send({
            message:
                " Content cannot be empty. "
        });
        return;
    }
    TrackerComments.create({
        creatorid : req.params.userid,
        trackercontainerid :req.params.trackercontainerid,
        categorycontainerid : req.params.categorycontainerid,
        content : req.body.content,
        tracker: req.params.trackerid
    })
        .then(data =>{
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || " Could not create the trackercomment. "
            });
        });
}
exports.update = (req, res) =>{
    // VAlIDATE REQUEST
    if (!req.body.content) {
        res.status(400).send({
            message:
                " Content cannot be empty. "
        });
        return;
    }
    TrackerComments.update({
        content:req.body.content
    },{
        where:{
            id : req.body.id
        },
        returning:true,
        plain:true
    })
        .then(data =>{
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || " Could not update the trackercomment. "
            });
        });
}
exports.delete = (req, res) => {
    TrackerComments.destroy({
        where : {
            id : req.body.id
        }
    })
        .then(num => {
            if(num === 1){
                res.send({
                    message:
                        " Deleted trackercomment successfully. "
                });
            }
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || " Could not delete all trackercomment. "
            });
        });
}