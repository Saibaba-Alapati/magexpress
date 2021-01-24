const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tracker', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    reporter: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'person',
        key: 'id'
      }
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    categorycontainer: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'categorycontainer',
        key: 'id'
      }
    },
    trackercontainer: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'trackercontainer',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'tracker',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tracker_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
