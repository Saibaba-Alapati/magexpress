const {
  Sequelize
} = require('sequelize');
const db  = require('../models/database')
const Person = db.define('person', {
    id: {
      type: Sequelize.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "id",
      autoIncrement: true
    },
    firstname: {
      type: Sequelize.CHAR,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "firstname",
      autoIncrement: false
    },
    lastname: {
      type: Sequelize.CHAR,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "lastname",
      autoIncrement: false
    },
    username: {
      type: Sequelize.CHAR,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "username",
      autoIncrement: false,
      unique: "person_username_key"
    },
    companyname: {
      type: Sequelize.CHAR,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "companyname",
      autoIncrement: false
    },
    email: {
      type: Sequelize.CHAR,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "email",
      autoIncrement: false
    },
    password: {
      type: Sequelize.CHAR,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "password",
      autoIncrement: false
    },
    createdat: {
      type: Sequelize.DATE,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "createdat",
      autoIncrement: false
    },
    updatedat: {
      type: Sequelize.DATE,
      allowNull: true,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: null,
      primaryKey: false,
      field: "updatedat",
      autoIncrement: false
    }
});

module.exports = Person;