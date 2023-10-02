'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Faction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Faction.belongsTo(
        models.User,{
          foreignKey:'organizerId'
        }
      )
      // Faction.hasMany(
      //   models.User,{
      //     foreignKey:'memberId'
      //   }
      // )
    }
  }
  Faction.init({
    id:{
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name:{
      type:DataTypes.STRING,
      allowNull: false,
    },
    description:{
      type:DataTypes.STRING,
      allowNull: false,
    },
    organizerId:{
      type:DataTypes.INTEGER,
      allowNull: false,
    },
    memberId:{
      type:DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Faction',
  });
  return Faction;
};
