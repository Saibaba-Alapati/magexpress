const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('assignees', {
    assignee: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'person',
        key: 'id'
      }
    },
    tracker: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tracker',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'assignees',
    schema: 'public',
    timestamps: false
  });
};
