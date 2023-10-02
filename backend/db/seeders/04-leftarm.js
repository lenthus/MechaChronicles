'use strict';

/** @type {import('sequelize-cli').Migration} */
const {User, LeftArm} = require('../models')
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

const userLeftArms = [
  {
    username: 'Shalakar',
    leftArm: [{
      name:"Boyce MK.1",
      description:"Boyce tech is known for being quick and highly armored, favoring close range combat.",
      health: 80,
      armor: 20,
      weapon: 1,
      weight: 8,
      value: 1200,
      userId: null,
      level: 1,
      isEquipped: false
    }]
  },
  {
    username: 'michaeltest',
    leftArm: [{
      name:"Shuler MK.1",
      description:"Shuler Shrines is known for producing sturdy laser focused parts.",
      health: 150,
      armor: 10,
      weapon: null,
      weight: 15,
      value: 2000,
      userId: null,
      level: 1,
      isEquipped: false
    }]
  },
  {
    username: 'GaimerGai',
    leftArm: [{
      name:"Richards MK.1",
      description:"Richards Industries belives reliability is the most important quality in mech parts.",
      health: 110,
      armor: 15,
      weapon: null,
      weight: 10,
      value: 1000,
      userId: null,
      level: 1,
      isEquipped: false
    }]
  },
  {
    username: 'Store',
    leftArm:[{
      name:"Boyce MK.1",
      description:"Boyce tech is known for being quick and highly armored, favoring close range combat.",
      health: 80,
      armor: 20,
      weapon: null,
      weight: 8,
      value: 1200,
      userId: null,
      level: 1,
      isEquipped: false
    },
    {
      name:"Shuler MK.1",
      description:"Shuler Shrines is known for producing sturdy laser focused parts.",
      health: 150,
      armor: 10,
      weapon: null,
      weight: 15,
      value: 2000,
      userId: null,
      level: 1,
      isEquipped: false
  },
    {
      name:"Richards MK.1",
      description:"Richards Industries belives reliability is the most important quality in mech parts.",
      health: 110,
      armor: 15,
      weapon: null,
      weight: 10,
      value: 1000,
      userId: null,
      level: 1,
      isEquipped: false
    }]
    }
];

module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'LeftArms';


for (let userLeftArm of userLeftArms){
  const {username, leftArm} = userLeftArm
  const theUser = await User.findOne({where:{username}})

  for( let leftArmInfo of leftArm){
    await LeftArm.create({ ...leftArmInfo, userId: theUser.id})
  }
}

  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'LeftArms';

    for (let userLeftArm of userLeftArms){
      const {username, leftArm} = userLeftArm
      const theUser = await User.findOne({where:{username}})
    
      for( let leftArmInfo of leftArm){
        await LeftArm.destroy({where:{ ...leftArmInfo, userId: theUser.id}})
      }
    }
  }
};