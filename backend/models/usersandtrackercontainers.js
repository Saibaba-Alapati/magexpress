const {
  Sequelize
} = require('sequelize');
const db  = require('../models/database')
const UsersandTrackerContainers = db.define('usersandtrackercontainers',{
    userid: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "userid",
      autoIncrement: false,
      references: {
        key: "id",
        model: "person"
      }
    },
    trackercontainerid: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "trackercontainerid",
      autoIncrement: false,
      references: {
        key: "id",
        model: "trackercontainer"
      }
    }
});

  module.exports = UsersandTrackerContainers;