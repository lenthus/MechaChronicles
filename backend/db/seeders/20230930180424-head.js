'use strict';

/** @type {import('sequelize-cli').Migration} */
const {User, Head} = require('../models')
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

const userHeads = [
  {
    username: 'Shalakar',
    head: [{
      name:"Boyce MK.1",
      description:"Boyce tech is known for being quick and highly armored, favoring close range combat.",
      health: 80,
      armor: 20,
      weight: 8,
      longRange: 10,
      midRange: 10,
      shortRange: 20,
      value: 1200,
      userId: null,
      level: 1,
    }]
  },
  {
    username: 'michaeltest',
    head: [{
      name:"Shuler MK.1",
      description:"Shuler Shrines is known for producing sturdy lazer focused parts.",
      health: 150,
      armor: 10,
      weight: 15,
      longRange: 20,
      midRange: 10,
      shortRange: 10,
      value: 2000,
      userId: null,
      level: 1,
    }]
  },
  {
    username: 'GaimerGai',
    head: [{
      name:"Richards MK.1",
      description:"Richards Industries belives reliability is the most important quality in mech parts.",
      health: 100,
      armor: 10,
      weight: 10,
      longRange: 20,
      midRange: 30,
      shortRange: 20,
      value: 2000,
      userId: null,
      level: 1,
    }]
  },
  {
    username: 'Store',
    head:[{
      name:"Boyce MK.1",
      description:"Boyce tech is known for being quick and highly armored, favoring close range combat.",
      health: 80,
      armor: 20,
      weight: 8,
      longRange: 10,
      midRange: 10,
      shortRange: 20,
      value: 1200,
      userId: null,
      level: 1,
    },
    {
      name:"Shuler MK.1",
      description:"Shuler Shrines is known for producing sturdy lazer focused parts.",
      health: 150,
      armor: 10,
      weight: 15,
      longRange: 20,
      midRange: 10,
      shortRange: 10,
      value: 2000,
      userId: null,
      level: 1,
  },
    {
      name:"Richards MK.1",
      description:"Richards Industries belives reliability is the most important quality in mech parts.",
      health: 100,
      armor: 10,
      weight: 10,
      longRange: 20,
      midRange: 30,
      shortRange: 20,
      value: 2000,
      userId: null,
      level: 1,
    }]
    }
];

module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Heads';


for (let userHead of userHeads){
  const {username, head} = userHead
  const theUser = await User.findOne({where:{username}})

  for( let headInfo of head){
    await Head.create({ ...headInfo, userId: theUser.id})
  }
}

  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Heads';

    for (let userHead of userHeads){
      const {username, head} = userHead
      const theUser = await User.findOne({where:{username}})
    
      for( let headInfo of head){
        await Head.destroy({where:{ ...headInfo, userId: theUser.id}})
      }
    }
  }
};