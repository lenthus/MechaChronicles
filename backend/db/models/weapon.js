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
          foreignKey:'userId',
          onDelete:'Cascade'
        }
      )
      Weapon.belongsTo(
        models.LeftArm,{
          foreignKey:'weapon'
        }
      )
      Weapon.belongsTo(
        models.RightArm,{
          foreignKey:'weapon'
        }
      ),
      Shield.belongsTo(
        models.Mech,{
          foreignKey:'right_shoulder'
        }
      ),
      Shield.belongsTo(
        models.Mech,{
          foreignKey:'left_shoulder'
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
    ammo: {
      type:DataTypes.INTEGER,

    },
    heat_gen: {
      type:DataTypes.INTEGER,

    },
    roll: {
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
    weight: {
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'Weapon',
  });
  return Weapon;
};
