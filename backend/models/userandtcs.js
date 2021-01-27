const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "user_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "person_model"
      }
    },
    trackercontainer_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "trackercontainer_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "trackercontainer_model"
      }
    },
    trackercontainercreator: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "trackercontainercreator",
      autoIncrement: false,
      references: {
        key: "id",
        model: "person_model"
      }
    }
  };
  const options = {
    tableName: "userandtcs",
    comment: "",
    indexes: []
  };
  const UserandtcsModel = sequelize.define("userandtcs_model", attributes, options);
  return UserandtcsModel;
};