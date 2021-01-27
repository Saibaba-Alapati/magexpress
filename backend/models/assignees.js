const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    assignee: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "assignee",
      autoIncrement: false,
      references: {
        key: "id",
        model: "person_model"
      }
    },
    tracker: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "tracker",
      autoIncrement: false,
      references: {
        key: "id",
        model: "tracker_model"
      }
    }
  };
  const options = {
    tableName: "assignees",
    comment: "",
    indexes: []
  };
  const AssigneesModel = sequelize.define("assignees_model", attributes, options);
  return AssigneesModel;
};