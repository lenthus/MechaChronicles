'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Weapons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      ammo: {
        type: Sequelize.INTEGER
      },
      heat_gen: {
        type: Sequelize.INTEGER
      },
      rounds_per_shot: {
        type: Sequelize.INTEGER
      },
      min_range: {
        type: Sequelize.INTEGER
      },
      max_range: {
        type: Sequelize.INTEGER
      },
      damage: {
        type: Sequelize.INTEGER
      },
      value: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Weapons');
  }
};