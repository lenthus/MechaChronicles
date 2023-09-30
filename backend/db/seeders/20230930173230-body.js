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
      weight: 80,
      speed: 20,
      value: 1200,
      userId: null,
      level: 1,
    }]
  },
  {
    username: 'Store',
    body:[{
      name:"Boyce MK.1",
      description:"Boyce tech is known for being quick and highly armored, favoring close range combat.",
      health: 80,
      armor: 20,
      weight: 80,
      speed: 20,
      value: 1200,
      userId: null,
      level: 1,
    }]
    }
];

module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Bodies';


for (let userBody of userBodies){
  const {username, body} = userBody
  const theUser = await User.findOne({where:{username}})

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
    
      for( let bodyInfo of body){
        await Body.destroy({where:{ ...bodyInfo, userId: theUser.id}})
      }
    }
  }
};