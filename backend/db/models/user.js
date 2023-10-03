'use strict';
const { Model, Validator } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
      User.hasMany(
        models.LeftArm, {
        foreignKey: 'userId',
        onDelete: 'Cascade'
      }
      )
      User.hasMany(
        models.Shield, {
        foreignKey: 'userId',
        onDelete: 'Cascade'
      }
      )
      User.hasMany(
        models.Weapon, {
        foreignKey: 'userId',
        onDelete: 'Cascade'
      }
      )
      User.hasMany(
        models.LeftLeg, {
        foreignKey: 'userId',
        onDelete: 'Cascade'
      }
      )
      User.hasMany(
        models.RightLeg, {
        foreignKey: 'userId',
        onDelete: 'Cascade'
      }
      )
      User.hasMany(
        models.Body, {
        foreignKey: 'id',
        onDelete: 'Cascade'
      }
      )
      User.hasMany(
        models.RightArm, {
        foreignKey: 'userId',
        onDelete: 'Cascade'
      }
      )
      User.hasMany(
        models.Head, {
        foreignKey: 'userId',
        onDelete: 'Cascade'
      }
      )
      // User.hasMany(
      //   models.Faction, {
      //   foreignKey: 'organizerId',
      //   onDelete: 'Cascade'
      // }
      // )
      // User.hasMany(
      //   models.Faction, {
      //   foreignKey: 'memberId',
      //   onDelete: 'Cascade'
      // }
      // )
      User.hasMany(
        models.Mech, {
        foreignKey: 'userId',
        onDelete: 'Cascade'
      }
      )
      //This is for the current Mech
      User.hasOne(
        models.Mech, {
        foreignKey: 'id',
        onDelete: 'Cascade'
      }
      )
    }
  };

  User.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [4, 30],
          isNotEmail(value) {
            if (Validator.isEmail(value)) {
              throw new Error("Cannot be an email.");
            }
          }
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 256],
          isEmail: true
        }
      },
      hashedPassword: {
        type: DataTypes.STRING.BINARY,
        allowNull: false,
        validate: {
          len: [60, 60]
        }
      },
      level: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      currentXp: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      money: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      currentMech: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "User",
      defaultScope: {
        attributes: {
          exclude: ["hashedPassword", "email", "createdAt", "updatedAt"]
        }
      }
    }
  );
  return User;
};
