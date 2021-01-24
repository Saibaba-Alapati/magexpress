const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('person', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: "person_first_name_key"
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: "person_last_name_key"
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: "person_user_name_key"
    },
    company_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM("offline", "online"),
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'person',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "person_first_name_key",
        unique: true,
        fields: [
          { name: "first_name" },
        ]
      },
      {
        name: "person_last_name_key",
        unique: true,
        fields: [
          { name: "last_name" },
        ]
      },
      {
        name: "person_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "person_user_name_key",
        unique: true,
        fields: [
          { name: "user_name" },
        ]
      },
    ]
  });
};
