'use strict';

/** @type {import('sequelize-cli').Migration} */
const {User, LeftLeg} = require('../models')
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

const userLeftLegs = [
  {
    username: 'Shalakar',
    leftLeg: [{
      name:"Boyce MK.1",
      description:"Boyce tech is known for being quick and highly armored, favoring close range combat.",
      health: 80,
      armor: 20,
      weight: 8,
      speed: 20,
      value: 1200,
      userId: null,
      level: 1,
      isEquipped: false
    }]
  },
  {
    username: 'michaeltest',
    leftLeg: [{
      name:"Shuler MK.1",
      description:"Shuler Shrines is known for producing sturdy laser focused parts.",
      health: 150,
      armor: 10,
      weight: 15,
      speed: 10,
      value: 2000,
      userId: null,
      level: 1,
      isEquipped: false
    }]
  },
  {
    username: 'GaimerGai',
    leftLeg: [{
      name:"Richards MK.1",
      description:"Richards Industries belives reliability is the most important quality in mech parts.",
      health: 110,
      armor: 15,
      weight: 10,
      speed: 10,
      value: 1200,
      userId: null,
      level: 1,
      isEquipped: false
    }]
  },
  {
    username: 'Store',
    leftLeg:[{
      name:"Boyce MK.1",
      description:"Boyce tech is known for being quick and highly armored, favoring close range combat.",
      health: 80,
      armor: 20,
      weight: 8,
      speed: 20,
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
      weight: 15,
      speed: 10,
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
      weight: 10,
      speed: 10,
      value: 1200,
      userId: null,
      level: 1,
      isEquipped: false
    }]
    }
];

module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'LeftLegs';


for (let userLeftLeg of userLeftLegs){
  const {username, leftLeg} = userLeftLeg
  const theUser = await User.findOne({where:{username}})

  for( let leftLegInfo of leftLeg){
    await LeftLeg.create({ ...leftLegInfo, userId: theUser.id})
  }
}

  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'LeftLegs';

    for (let userLeftLeg of userLeftLegs){
      const {username, leftLeg} = userLeftLeg
      const theUser = await User.findOne({where:{username}})
    
      for( let leftLegInfo of leftLeg){
        await LeftLeg.destroy({where:{ ...leftLegInfo, userId: theUser.id}})
      }
    }
  }
};