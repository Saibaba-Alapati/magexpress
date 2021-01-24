const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('roommessage', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    creator: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    channel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'roomchannel',
        key: 'id'
      }
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    forwarded: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    replyto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'roommessage',
        key: 'id'
      }
    },
    privatereplyto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'person',
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
    tableName: 'roommessage',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "roommessage_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
