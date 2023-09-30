'use strict';

/** @type {import('sequelize-cli').Migration} */
const {User, Shield} = require('../models')
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

const userShields = [
  {
    username: 'Shalakar',
    shield: [{
      name:"Boyce MK.1",
      description:"You cant hit whats not there",
      balistic: 20,
      lazer: 20,
      missle: 20,
      weight: 8,
      value: 2000,
      userId: null,
      level: 1,
    }]
  },
  {
    username: 'michaeltest',
    shield: [{
      name:"Shuler MK.1",
      description:"May her light watch over you.",
      balistic: 10,
      lazer: 30,
      missle: 10,
      weight: 15,
      value: 2000,
      userId: null,
      level: 1,
    }]
  },
  {
    username: 'GaimerGai',
    shield: [{
      name:"Richards MK.1",
      description:"You fell for my trap.",
      balistic: 15,
      lazer: 15,
      missle: 15,
      weight: 10,
      value: 1500,
      userId: null,
      level: 1,
    }]
  },
  {
    username: 'Store',
    shield:[{
      name:"Boyce MK.1",
      description:"You cant hit whats not there",
      balistic: 20,
      lazer: 20,
      missle: 20,
      weight: 8,
      value: 2000,
      userId: null,
      level: 1,
    },
    {
      name:"Shuler MK.1",
      description:"May her light watch over you.",
      balistic: 10,
      lazer: 30,
      missle: 10,
      weight: 15,
      value: 2000,
      userId: null,
      level: 1,
  },
    {
      name:"Richards MK.1",
      description:"You fell for my trap.",
      balistic: 15,
      lazer: 15,
      missle: 15,
      weight: 10,
      value: 1500,
      userId: null,
      level: 1,
    }]
    }
];

module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Shields';


for (let userShield of userShields){
  const {username, shield} = userShield
  const theUser = await User.findOne({where:{username}})

  for( let shieldInfo of shield){
    await Shield.create({ ...shieldInfo, userId: theUser.id})
  }
}

  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Shields';

    for (let userShield of userShields){
      const {username, shield} = userShield
      const theUser = await User.findOne({where:{username}})
    
      for( let shieldInfo of shield){
        await Shield.destroy({where:{ ...shieldInfo, userId: theUser.id}})
      }
    }
  }
};