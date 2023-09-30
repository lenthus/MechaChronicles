'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LeftArm extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      LeftArm.belongsTo(
        models.User,
        { foreignKey: 'userId',
          onDelete:'Cascade' }
      ),
      LeftArm.belongsTo(
        models.Mech,{
          foreignKey:'left_arm',
        }
      )
      // will need a hasOne weapon
    }
  }
  LeftArm.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
    },
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
    weapon: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
    },
    weight: {
      type: DataTypes.INTEGER,
    },
    value: {
      type: DataTypes.INTEGER,
    },
    level: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
  }, {
    sequelize,
    modelName: 'LeftArm',
  });
  return LeftArm;
};