const {
  Sequelize
} = require('sequelize');
const db  = require('../models/database')
const RoomMessage = db.define('roommessage',{
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
    roomid: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "roomid",
      autoIncrement: false,
      references: {
        key: "id",
        model: "room"
      }
    },
    channelid: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "channelid",
      autoIncrement: false,
      references: {
        key: "id",
        model: "channel"
      }
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "content",
      autoIncrement: false
    },
    replyid: {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "replyid",
      autoIncrement: false,
      references: {
        key: "id",
        model: "roommessage"
      }
    },
    forwarded: {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "forwarded",
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
module.exports = RoomMessage