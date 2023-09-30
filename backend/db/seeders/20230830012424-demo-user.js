'use strict';

const { User } = require('../models');
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up (queryInterface, Sequelize) {
    await User.bulkCreate([
      {
        email: 'michael.a.boyce999@gmail.com',
        username: 'Shalakar',
        hashedPassword: bcrypt.hashSync('Taekwondo1'),
        level: 1,
        currentXp: 0,
        currentMech: null,
        money: 0
      },
      {
        email: 'michael.a.boyce999@gmail.com',
        username: 'Shalakar',
        hashedPassword: bcrypt.hashSync('Taekwondo1'),
        level: 1,
        currentXp: 0,
        currentMech: null,
        money: 0
      },
      {
        email: 'michael.a.boyce999@gmail.com',
        username: 'Shalakar',
        hashedPassword: bcrypt.hashSync('Taekwondo1'),
        level: 1,
        currentXp: 0,
        currentMech: null,
        money: 0
      },
      {
        id: 711,
        email: 'demo@store.io',
        username: 'Store',
        hashedPassword: bcrypt.hashSync('thankYouComeAgain'),
        level: 1,
        currentXp: 0,
        currentMech: null,
        money: 1000000000
      },
    ], { validate: true });
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Users';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      username: { [Op.in]: ['Shalakar', 'Store'] }
    }, {});
  }
};
