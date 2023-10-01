'use strict';

/** @type {import('sequelize-cli').Migration} */
const {User, Body} = require('../models')
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

const userBodies = [
  {
    username: 'Shalakar',
    body: [{
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
    body: [{
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
    body: [{
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
    body:[{
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
    options.tableName = 'Bodies';


for (let userBody of userBodies){
  const {username, body} = userBody
  const theUser = await User.findOne({where:{username}})
  console.log(theUser)

  for( let bodyInfo of body){
    await Body.create({ ...bodyInfo, userId: theUser.id})
  }
}

  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Bodies';

    for (let userBody of userBodies){
      const {username, body} = userBody
      const theUser = await User.findOne({where:{username}})
      // console.log(theUser)
    
      for( let bodyInfo of body){
        await Body.destroy({where:{ ...bodyInfo, userId: theUser.id}})
      }
    }
  }
};