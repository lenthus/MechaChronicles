'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Head extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Head.belongsTo(
        models.User,
        { foreignKey: 'userId',
          onDelete:'Cascade' }
      ),
      Head.belongsTo(
        models.Mech,{
          foreignKey:'head',
        }
      )
    }
  }
  Head.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    health: {
      type: DataTypes.INTEGER,
    },
    armor: {
      type: DataTypes.INTEGER,
    },
    weight: {
      type: DataTypes.INTEGER,
    },
    value: {
      type: DataTypes.INTEGER,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
    },
    level: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    longRange: {
      type: DataTypes.INTEGER,
    },
    midRange: {
      type: DataTypes.INTEGER,
    },
    shortRange: {
      type: DataTypes.INTEGER
    },
    isEquipped: {
      type: DataTypes.BOOLEAN,

    },
  }, {
    sequelize,
    modelName: 'Head',
  });
  return Head;
};
