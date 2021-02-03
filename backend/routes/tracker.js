const tracker = require('../controllers/tracker.controller');
const express = require('express');
const trackerroute = express.Router();

trackerroute.post("/:userid/:trackercontainerid/:categorycontainerid/createtracker",tracker.create);
trackerroute.get("/:userid/:trackercontainerid/:categorycontainerid/:trackerid/findAllCommentsOnTracker",tracker.findAllCommentsOnTracker);
trackerroute.get("/:userid/:trackercontainerid/:categorycontainerid/:trackerid/gettracker",tracker.findOne);
trackerroute.put("/:userid/:trackercontainerid/:categorycontainerid/:trackerid/updatetracker",tracker.update);
trackerroute.delete("/:userid/:trackercontainerid/:categorycontainerid/:trackerid/deletetracker",tracker.delete);
trackerroute.delete("/:userid/:trackercontainerid/:categorycontainerid/:trackerid/deletefewtrackers",tracker.deleteFew);
module.exports =  trackerroute;