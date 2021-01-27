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
    reporter: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "reporter",
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
    categorycontainer: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "categorycontainer",
      autoIncrement: false,
      references: {
        key: "id",
        model: "categorycontainer_model"
      }
    },
    trackercontainer: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "trackercontainer",
      autoIncrement: false,
      references: {
        key: "id",
        model: "trackercontainer_model"
      }
    }
  };
  const options = {
    tableName: "tracker",
    comment: "",
    indexes: []
  };
  const TrackerModel = sequelize.define("tracker_model", attributes, options);
  return TrackerModel;
};