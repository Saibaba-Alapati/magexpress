const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('linkedtrackers', {
    firsttracker_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'person',
        key: 'id'
      }
    },
    secondtracker_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'person',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'linkedtrackers',
    schema: 'public',
    timestamps: false
  });
};
