const {
  Sequelize
} = require('sequelize');
const db  = require('../models/database')
const SubTrackers = db.define('subtrackers',{
    parenttrackerid: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "parenttrackerid",
      autoIncrement: false,
      references: {
        key: "id",
        model: "tracker"
      }
    },
    childtrackerid: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "childtrackerid",
      autoIncrement: false,
      references: {
        key: "id",
        model: "tracker"
      }
    }
});

module.exports = SubTrackers;