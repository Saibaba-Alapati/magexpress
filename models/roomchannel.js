const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('roomchannel', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    creator: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    room: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'chatroom',
        key: 'id'
      }
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
    tableName: 'roomchannel',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "roomchannel_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
