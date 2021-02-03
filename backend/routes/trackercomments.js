const trackercomment = require('../controllers/trackercomments.controller')
const  express = require('express');
const trackercommentroute = express.Router();

trackercommentroute.post("/:userid/:trackercontainerid/:categorycontainerid/:trackerid/createcomment",trackercomment.create);
trackercommentroute.put("/:userid/:trackercontainerid/:categorycontainerid/:trackerid/:trackercommentId/updatecomment",trackercomment.update);
trackercommentroute.delete("/:userid/:trackercontainerid/:categorycontainerid/:trackerid/:trackercommentId/deletecomment",trackercomment.delete);

module.exports =  trackercommentroute;
