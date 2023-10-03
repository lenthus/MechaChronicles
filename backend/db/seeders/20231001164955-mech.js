'use strict';

/** @type {import('sequelize-cli').Migration} */
const {User, Mech} = require('../models')
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

const userMechs = [
  {
    username: 'Shalakar',
    mech: [{
      name:"Ninja",
      head: 1,
      body: 1,
      left_shoulder: 1,
      left_arm: 1,
      left_leg: 1,
      right_shoulder: 1,
      right_arm: 1,
      right_leg: 1,
    }]
  },
  {
    username: 'michaeltest',
    mech: [{
      name:"Moonlight",
      head: 2,
      body: 2,
      left_shoulder: 1,
      left_arm: 2,
      left_leg: 2,
      right_shoulder: 1,
      right_arm: 2,
      right_leg: 2,
    }]
  },
  {
    username: 'GaimerGai',
    mech: [{
      name:"The Devin",
      head: 3,
      body: 3,
      left_shoulder: 1,
      left_arm: 3,
      left_leg: 3,
      right_shoulder: 1,
      right_arm: 3,
      right_leg: 3,
    }]
  },
];

module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Mechs';
// console.log("tablename", Mech.tableName, "\n")

for (let userMech of userMechs){
  const {username, mech} = userMech
  // console.log(username)
  const theUser = await User.findOne({where:{username}})
  // console.log(theUser)

  for( let mechInfo of mech){
    // console.log(mechInfo)
    await Mech.create({ ...mechInfo, userId: theUser.id})
    // console.log("\n", "hello", "\n")
  }
}

  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Mechs';

    for (let userMech of userMechs){
      const {username, mech} = userMech
      const theUser = await User.findOne({where:{username}})
      // console.log(theUser)

      for( let mechInfo of mech){
        await Mech.destroy({where:{ ...mechInfo, userId: theUser.id}})
      }
    }
  }
};
