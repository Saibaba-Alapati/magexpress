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
      autoIncrement: false,
      references: {
        key: "id",
        model: "person_model"
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
    receiver: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "receiver",
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
    directchat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "directchat",
      autoIncrement: false,
      references: {
        key: "id",
        model: "directchat_model"
      }
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
        model: "directmessage_model"
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
        model: "roommessage_model"
      }
    }
  };
  const options = {
    tableName: "directmessage",
    comment: "",
    indexes: []
  };
  const DirectmessageModel = sequelize.define("directmessage_model", attributes, options);
  return DirectmessageModel;
};