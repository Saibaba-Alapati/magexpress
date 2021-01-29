const {
  Sequelize
} = require('sequelize');
const db  = require('../models/database')
const Tracker = db.define('tracker',{
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
    },
    categorycontainerid: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "categorycontainerid",
      autoIncrement: false,
      references: {
        key: "id",
        model: "categorycontainer"
      }
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "content",
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

module.exports = Tracker;