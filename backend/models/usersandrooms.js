const {
  Sequelize
} = require('sequelize');
const db  = require('../models/database')
const UsersAndRooms = db.define('usersandrooms',{
    userid: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "userid",
      autoIncrement: false,
      references: {
        key: "id",
        model: "person"
      }
    },
    roomid: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "roomid",
      autoIncrement: false,
      references: {
        key: "id",
        model: "room"
      }
    }
});
module.exports = UsersAndRooms;