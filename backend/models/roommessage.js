const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "id",
      autoIncrement: true
    },
    creator: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "creator",
      autoIncrement: false
    },
    channel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "channel",
      autoIncrement: false,
      references: {
        key: "id",
        model: "roomchannel_model"
      }
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "content",
      autoIncrement: false
    },
    forwarded: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "forwarded",
      autoIncrement: false
    },
    replyto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "replyto",
      autoIncrement: false,
      references: {
        key: "id",
        model: "roommessage_model"
      }
    },
    privatereplyto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "privatereplyto",
      autoIncrement: false,
      references: {
        key: "id",
        model: "person_model"
      }
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "created_at",
      autoIncrement: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      comment: null,
      primaryKey: false,
      field: "updated_at",
      autoIncrement: false
    },
    room: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "room",
      autoIncrement: false,
      references: {
        key: "id",
        model: "chatroom_model"
      }
    }
  };
  const options = {
    tableName: "roommessage",
    comment: "",
    indexes: []
  };
  const RoommessageModel = sequelize.define("roommessage_model", attributes, options);
  return RoommessageModel;
};