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
    tracker: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "tracker",
      autoIncrement: false,
      references: {
        key: "id",
        model: "tracker_model"
      }
    },
    trackercontainer: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "trackercontainer",
      autoIncrement: false,
      references: {
        key: "id",
        model: "trackercontainer_model"
      }
    },
    categorycontainer: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "categorycontainer",
      autoIncrement: false,
      references: {
        key: "id",
        model: "categorycontainer_model"
      }
    }
  };
  const options = {
    tableName: "trackercomments",
    comment: "",
    indexes: []
  };
  const TrackercommentsModel = sequelize.define("trackercomments_model", attributes, options);
  return TrackercommentsModel;
};