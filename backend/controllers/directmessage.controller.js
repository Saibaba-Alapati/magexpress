const initModels = require('../models/init-models');
const sequelize = require("sequelize");
const models = initModels(sequelize);
const ChatRoom = models.ChatRoom;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    const userId = req.params.userId
    const directmessage = {
        creator : userId
    }
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {

};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {

};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {

};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {

};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {

};