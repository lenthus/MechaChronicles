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
      ballistic: 20,
      laser: 20,
      missile: 20,
      weight: 8,
      value: 2000,
      userId: null,
      level: 1,
      isEquipped: false
    }]
  },
  {
    username: 'michaeltest',
    shield: [{
      name:"Shuler MK.1",
      description:"May her light watch over you.",
      ballistic: 10,
      laser: 30,
      missile: 10,
      weight: 15,
      value: 2000,
      userId: null,
      level: 1,
      isEquipped: false
    }]
  },
  {
    username: 'GaimerGai',
    shield: [{
      name:"Richards MK.1",
      description:"You fell for my trap.",
      ballistic: 15,
      laser: 15,
      missile: 15,
      weight: 10,
      value: 1500,
      userId: null,
      level: 1,
      isEquipped: false
    }]
  },
  {
    username: 'Store',
    shield:[{
      name:"Boyce MK.1",
      description:"You cant hit whats not there",
      ballistic: 20,
      laser: 20,
      missile: 20,
      weight: 8,
      value: 2000,
      userId: null,
      level: 1,
      isEquipped: false
    },
    {
      name:"Shuler MK.1",
      description:"May her light watch over you.",
      ballistic: 10,
      laser: 30,
      missile: 10,
      weight: 15,
      value: 2000,
      userId: null,
      level: 1,
      isEquipped: false
  },
    {
      name:"Richards MK.1",
      description:"You fell for my trap.",
      ballistic: 15,
      laser: 15,
      missile: 15,
      weight: 10,
      value: 1500,
      userId: null,
      level: 1,
      isEquipped: false
    },
    {
      name:"Hasbee MK.1",
      description:"As far as mech parts go Hasbee products are known for being little better than plastic.",
      ballistic: 10,
      laser: 10,
      missile: 10,
      weight: 10,
      value: 1000,
      userId: null,
      level: 1,
  },]
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
