'use strict';

const { User } = require('../models');
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up (queryInterface, Sequelize) {
    try{
      
      await User.bulkCreate([
        {
          email: 'michael.a.boyce999@gmail.com',
          username: 'Shalakar',
          hashedPassword: bcrypt.hashSync('Taekwondo1'),
          level: 1,
          currentXp: 1,
          currentMech: null,
          money: 1
        },
        {
          email: 'michaeltest@michaeltest.com',
          username: 'michaeltest',
          hashedPassword: bcrypt.hashSync('michaeltest'),
          level: 1,
          currentXp: 1,
          currentMech: null,
          money: 1
        },
        {
          email: 'devinmrichards95@yahoo.com',
          username: 'GaimerGai',
          hashedPassword: bcrypt.hashSync('password1234@'),
          level: 1,
          currentXp: 1,
          currentMech: null,
          money: 1
        },
        {
          id: 711,
          email: 'demo@store.io',
          username: 'Store',
          hashedPassword: bcrypt.hashSync('thankYouComeAgain'),
          level: 1,
          currentXp: 1,
          currentMech: null,
          money: 10000000
        },
      ], { validate: true });
    }
    catch(err){
      console.log(err)
    }
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Users';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      username: { [Op.in]: ['Shalakar', 'michaeltest', 'GaimerGai', 'Store' ] }
    }, {});
  }
};
