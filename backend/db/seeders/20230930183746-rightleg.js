'use strict';

/** @type {import('sequelize-cli').Migration} */
const {User, RightLeg} = require('../models')
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

const userRightLegs = [
  {
    username: 'Shalakar',
    rightLeg: [{
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
    rightLeg: [{
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
    rightLeg: [{
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
    rightLeg:[{
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
    },
    {
      name:"Hasbee MK.1",
      description:"As far as mech parts go Hasbee products are known for being little better than plastic.",
      health: 100,
      armor: 10,
      weight: 100,
      speed: 10,
      value: 1000,
      userId: null,
      level: 1,
  },]
    }
];

module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'RightLegs';


for (let userRightLeg of userRightLegs){
  const {username, rightLeg} = userRightLeg
  const theUser = await User.findOne({where:{username}})

  for( let rightLegInfo of rightLeg){
    await RightLeg.create({ ...rightLegInfo, userId: theUser.id})
  }
}

  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'RightLegs';

    for (let userRightLeg of userRightLegs){
      const {username, rightLeg} = userRightLeg
      const theUser = await User.findOne({where:{username}})
    
      for( let rightLegInfo of rightLeg){
        await RightLeg.destroy({where:{ ...rightLegInfo, userId: theUser.id}})
      }
    }
  }
};