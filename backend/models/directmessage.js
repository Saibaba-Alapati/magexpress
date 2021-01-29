const {
  Sequelize
} = require('sequelize');
const db  = require('../models/database')
const DirectMessage = db.define('directmessage',{
    id: {
      type: Sequelize.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "id",
      autoIncrement: true
    },
    authorid: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "authorid",
      autoIncrement: false,
      references: {
        key: "id",
        model: "person"
      }
    },
    receiverid: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "receiverid",
      autoIncrement: false,
      references: {
        key: "id",
        model: "person"
      }
    },
    directchatid: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "directchatid",
      autoIncrement: false,
      references: {
        key: "id",
        model: "directchat"
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
        model: "directmessage"
      }
    },
    privatereplyid: {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "privatereplyid",
      autoIncrement: false,
      references: {
        key: "id",
        model: "roommessage"
      }
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

module.exports = DirectMessage