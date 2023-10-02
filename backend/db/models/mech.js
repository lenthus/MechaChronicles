'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mech extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Mech.belongsTo(
        models.User,{
          foreignKey:'userId'
        }
      )
      Mech.hasOne(
        models.User,{
          foreignKey:'currentMech'
        }
      )
      Mech.hasOne(
        models.Head,{
          foreignKey:'id'
        }
      )
      Mech.hasOne(
        models.Body,{
          foreignKey:'id'
        }
      )
      Mech.hasOne(
        models.LeftArm,{
          foreignKey:'id'
        }
      )
      Mech.hasOne(
        models.LeftLeg,{
          foreignKey:'id'
        }
      )
      Mech.hasOne(
        models.RightArm,{
          foreignKey:'id'
        }
      ),
      Mech.hasOne(
        models.RightLeg,{
          foreignKey:'id'
        }
      )
    }
  }
  Mech.init({
    id:{
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId:{
      type:DataTypes.INTEGER,
      allowNull: false,
    },
    name:{
      type:DataTypes.STRING,
      allowNull: false,
    },
    head:{
      type:DataTypes.INTEGER,
      allowNull: false,
    },
    body:{
      type:DataTypes.INTEGER,
      allowNull: false,
    },
    left_shoulder:{
      type:DataTypes.INTEGER,
      allowNull: true,
    },
    left_arm:{
      type:DataTypes.INTEGER,
      allowNull: false,
    },
    left_leg:{
      type:DataTypes.INTEGER,
      allowNull: false,
    },
    right_shoulder:{
      type:DataTypes.INTEGER,
      allowNull: true,
    },
    right_arm:{
      type:DataTypes.INTEGER,
      allowNull: false,
    },
    right_leg:{
      type:DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Mech',tableName:"Mechs"
  });
  return Mech;
};
