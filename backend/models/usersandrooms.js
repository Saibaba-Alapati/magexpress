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
    chatroom_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "chatroom_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "chatroom_model"
      }
    },
    roomcreator: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "roomcreator",
      autoIncrement: false,
      references: {
        key: "id",
        model: "person_model"
      }
    }
  };
  const options = {
    tableName: "usersandrooms",
    comment: "",
    indexes: []
  };
  const UsersandroomsModel = sequelize.define("usersandrooms_model", attributes, options);
  return UsersandroomsModel;
};