const express = require('express');
const trackerroute = express.Router();
const tracker = require('../controllers/tracker.controller');
const trackercomment = require('../controllers/trackercomments.controller');
trackerroute.post('/:categorycontainerid',tracker.createTracker);
trackerroute.post('/',tracker.createTracker);
trackerroute.get('/:categorycontainerid/:trackerid',tracker.findAllCommentsOnTracker);
trackerroute.get('/:categorycontainerid',tracker.findOneTracker);
trackerroute.put('/:categorycontainerid/:trackerid',tracker.updateTracker);
trackerroute.delete('/:categorycontainerid/:trackerid',tracker.deleteTracker);
trackerroute.delete('/:categorycontainerid/:trackerid',tracker.deleteFewTrackers);
trackerroute.post('/:categorycontainerid/:trackerid',trackercomment.createComment);
trackerroute.put('/:categorycontainerid/:trackerid',trackercomment.updateComment);
trackerroute.delete('/:categorycontainerid/:trackerid',trackercomment.deleteComment);
module.exports =  trackerroute;