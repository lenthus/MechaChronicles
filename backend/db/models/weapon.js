'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Weapon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Weapon.belongsTo(
        models.User,{
          foreignKey:'id',
          onDelete:'Cascade'
        }
      )
      Weapon.belongsTo(
        models.LeftArm,{
          foreignKey:'id'
        }
      )
      Weapon.belongsTo(
        models.RightArm,{
          foreignKey:'id'
        }
      )

    }
  }
  Weapon.init({
    id:{
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    ammo: {
      type:DataTypes.INTEGER,

    },
    heatGen: {
      type:DataTypes.INTEGER,

    },
    roll: {
      type:DataTypes.INTEGER,

    },
    minRange: {
      type:DataTypes.INTEGER,

    },
    maxRange: {
      type:DataTypes.INTEGER,

    },
    damage: {
      type:DataTypes.INTEGER,

    },
    value: {
      type:DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
    },
    level: {
      type: DataTypes.INTEGER,
    },
    weight: {
      type: DataTypes.INTEGER,
    },
    isEquipped: {
      type: DataTypes.BOOLEAN,

    },
  }, {
    sequelize,
    modelName: 'Weapon',
  });
  return Weapon;
};
