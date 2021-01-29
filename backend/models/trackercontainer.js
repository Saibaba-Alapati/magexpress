const {
  Sequelize
} = require('sequelize');
const db  = require('../models/database')
const TrackerContainer = db.define('trackercontainer', {
    id: {
      type: Sequelize.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "id",
      autoIncrement: true
    },
    creatorid: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "creatorid",
      autoIncrement: false,
      references: {
        key: "id",
        model: "person"
      }
    },
    name: {
      type: Sequelize.CHAR,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "name",
      autoIncrement: false
    },
    description: {
      type: Sequelize.CHAR,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "description",
      autoIncrement: false
    },
    createdat: {
      type: Sequelize.DATE,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "createdat",
      autoIncrement: false
    },
    updatedat: {
      type: Sequelize.DATE,
      allowNull: true,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: null,
      primaryKey: false,
      field: "updatedat",
      autoIncrement: false
    }
  });
  module.exports = TrackerContainer;