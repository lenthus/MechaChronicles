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
      Shield.belongsTo(
        models.User,{
          foreignKey:'userId'
        }
      )
      // Shield.belongsTo(
      //   models.r_shoulder,{
      //     foreignKey:'userId'
      //   }
      // )

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
    modelName: 'Shield',
  });
  return Shield;
};
