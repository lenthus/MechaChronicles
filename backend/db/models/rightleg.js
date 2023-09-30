'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RightLeg extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      RightLeg.belongsTo(
        models.User,{
          foreignKey:'userId',
          onDelete:'Cascade'
        }
      ),
      RightLeg.belongsTo(
        models.Mech,{
          foreignKey:'right_leg',
        }
      )
    }
  }
  RightLeg.init({
    name: {
      type: DataTypes.STRING,
      allowNull:false
    },
    userId: {
     type: DataTypes.INTEGER,
    },
    description: {
     type: DataTypes.STRING,
     allowNull:false
    },
    health: {
      type: DataTypes.INTEGER,
    },
    armor:{
      type: DataTypes.INTEGER,
    },
    weight:{
      type: DataTypes.INTEGER,
    },
    speed:{
      type: DataTypes.INTEGER,
    },
    value:{
      type:DataTypes.INTEGER,
    },
    isEquipped: {
      type: DataTypes.BOOLEAN,

    },
  }, {
    sequelize,
    modelName: 'RightLeg',
    defaultScope: {
      attributes: {
        exclude: ["createdAt", "updatedAt"]
      }
    }
  });
  return RightLeg;
};
