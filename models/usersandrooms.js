const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usersandrooms', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'person',
        key: 'id'
      }
    },
    chatroom_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'chatroom',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'usersandrooms',
    schema: 'public',
    timestamps: false
  });
};
