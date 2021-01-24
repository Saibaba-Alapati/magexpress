const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userandtcs', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'person',
        key: 'id'
      }
    },
    trackercontainer_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'trackercontainer',
        key: 'id'
      }
    },
    trackercontainercreator: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'person',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'userandtcs',
    schema: 'public',
    timestamps: false
  });
};
