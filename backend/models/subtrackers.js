const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    parenttracker: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "parenttracker",
      autoIncrement: false,
      references: {
        key: "id",
        model: "tracker_model"
      }
    },
    childtracker: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "childtracker",
      autoIncrement: false,
      references: {
        key: "id",
        model: "tracker_model"
      }
    }
  };
  const options = {
    tableName: "subtrackers",
    comment: "",
    indexes: []
  };
  const SubtrackersModel = sequelize.define("subtrackers_model", attributes, options);
  return SubtrackersModel;
};