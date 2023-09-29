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
          foreignKey:'userId'
        }
      )
      // Weapon.belongsTo(
      //   models.LeftArm,{
      //     foreignKey:'id'
      //   }
      // )
      // Weapon.belongsTo(
      //   models.RightArm,{
      //     foreignKey:'id'
      //   }
      // )
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
    ammo: {
      type:DataTypes.INTEGER,

    },
    heat_gen: {
      type:DataTypes.INTEGER,

    },
    rounds_per_shot: {
      type:DataTypes.INTEGER,

    },
    min_range: {
      type:DataTypes.INTEGER,

    },
    max_range: {
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
  }, {
    sequelize,
    modelName: 'Weapon',
  });
  return Weapon;
};
