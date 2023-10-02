'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Mechs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
          onDelete:'CASCADE'
        },
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      head: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Heads',
          key: 'id',
        },
      },
      body: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Bodies',
          key: 'id',
        },
      },
      left_shoulder: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Shields',
          key: 'id',
        },
      },
      left_arm: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'LeftArms',
          key: 'id',
        },
      },
      left_leg: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'LeftLegs',
          key: 'id',
        },
      },
      right_shoulder: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Shields',
          key: 'id',
        },
      },
      right_arm: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'RightArms',
          key: 'id',
        },
      },
      right_leg: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'RightLegs',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    }, options);
  },
  async down(queryInterface, Sequelize) {
    options.tableName = "Mechs"
    await queryInterface.dropTable('Mechs');
  }
};
