'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LeftLeg extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      LeftLeg.belongsTo(
        models.User,{
          foreignKey:'userId',
          onDelete:'Cascade'
        }
      ),
      LeftLeg.belongsTo(
        models.Mech,{
          foreignKey:'left_leg',
        }
      )
    }
  }
  LeftLeg.init({
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
  }, {
    sequelize,
    modelName: 'LeftLeg',
    defaultScope: {
      attributes: {
        exclude: ["createdAt", "updatedAt"]
      }
    }
  });
  return LeftLeg;
};
