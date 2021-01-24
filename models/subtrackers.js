const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('subtrackers', {
    parenttracker: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tracker',
        key: 'id'
      }
    },
    childtracker: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tracker',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'subtrackers',
    schema: 'public',
    timestamps: false
  });
};
