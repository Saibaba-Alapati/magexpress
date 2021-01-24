const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('categorycontainer', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    label: {
      type: DataTypes.STRING,
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
    tableName: 'categorycontainer',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "categorycontainer_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
