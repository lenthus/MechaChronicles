'use strict';
/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Heads', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      health: {
        type: Sequelize.INTEGER
      },
      armor: {
        type: Sequelize.INTEGER
      },
      weight: {
        type: Sequelize.INTEGER
      },
      value: {
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        refrences:{
          model:'Users',
          key: 'id'
        }
      },
      level: {
        type: Sequelize.INTEGER,
        defaultValue: 1
      },
      longRange: {
        type: Sequelize.INTEGER
      },
      midRange: {
        type: Sequelize.INTEGER
      },
      shortRange: {
        type: Sequelize.INTEGER
      },
      isEquipped:{
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_DATE")
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_DATE")
      }
    },options);
  },
  async down(queryInterface, Sequelize) {
    options.tableName = "Heads";
    await queryInterface.dropTable(options);
  }
};
