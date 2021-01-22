const express =  require('express');
const router = express.Router();
const {Tracker,TrackerContainer} = require('../models/tracker.model')

router.post('/trackercontainer',function(req,res,next){
    if(req.user){
        const trackercontainer = new TrackerContainer({
            containername : req.body.containername,
            connection  : req.body.connection,
            creator : req.body.creator,
            trackers : req.body.trackers,
            categories  : req.body.categories,
            onlyroles  : req.body.onlyroles,
        });
        trackercontainer.save().then(()=>{
            res.status(201).json({
                message: 'Container created successfully!'
            });
        }).catch((error)=>{
            res.status(500).json({
                error:error
            });
        })
    }
})
router.post('/trackercontainer/:id/addtracker',function(req,res,next){
    if(req.user){
        const tracker = new Tracker({
            name: req.body.name,
            description : req.body.description,
            creator  : req.user._id,
            category: req.body.category,
            comments : req.body.comments,
            linktask : req.body.linktask,
            subtasks:req.body.subtasks,
            status : req.body.statusreq.body.nest,
            assignees  : req.body.assignees,
        });
        tracker.save().then(()=>{
            res.status(201).json({
                message: 'Container created successfully!'
            });
        }).catch((error)=>{
            res.status(500).json({
                error:error
            });
        })
    }
})
