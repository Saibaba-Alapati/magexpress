const {
  Sequelize
} = require('sequelize');
const db  = require('../models/database')
const Assignees = db.define('assignees',{
    assigneeid: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "assigneeid",
      autoIncrement: false,
      references: {
        key: "id",
        model: "person"
      }
    },
    trackerid: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "trackerid",
      autoIncrement: false,
      references: {
        key: "id",
        model: "tracker"
      }
    }
});
module.exports = Assignees;
