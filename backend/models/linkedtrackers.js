const {
  Sequelize
} = require('sequelize');
const db  = require('../models/database')
const LinkedTrackers  = db.define('linkedtrackers',{
    trackerid1: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "trackerid1",
      autoIncrement: false,
      references: {
        key: "id",
        model: "tracker"
      }
    },
    trackerid2: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "trackerid2",
      autoIncrement: false,
      references: {
        key: "id",
        model: "tracker"
      }
    }
});

module.exports = LinkedTrackers