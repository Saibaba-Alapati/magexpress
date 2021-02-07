const TrackerComments = require('/Users/saibabaalapati/Desktop/magexpress/backend/models/trackercomment');
// CREATE A TRACKER CONTAINER
exports.createComment = (req, res) =>{
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
exports.updateComment = (req, res) =>{
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
            id : req.body.trackercommentid
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
exports.deleteComment = (req, res) => {
    TrackerComments.destroy({
        where : {
            id : req.body.trackercommentid
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