const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    firsttracker_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "firsttracker_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "person_model"
      }
    },
    secondtracker_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "secondtracker_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "person_model"
      }
    }
  };
  const options = {
    tableName: "linkedtrackers",
    comment: "",
    indexes: []
  };
  const LinkedtrackersModel = sequelize.define("linkedtrackers_model", attributes, options);
  return LinkedtrackersModel;
};