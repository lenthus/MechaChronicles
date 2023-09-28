'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shield extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  }
  Shield.init({
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
    balistic:{
      type:DataTypes.INTEGER,

    },
    laser:{
      type:DataTypes.INTEGER,

    },
    missile:{
      type:DataTypes.INTEGER,

    },
    value:{
      type:DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Shield',
  });
  return Shield;
};
