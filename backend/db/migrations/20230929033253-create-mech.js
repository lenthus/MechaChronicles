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
          model: 'Head',
          key: 'id',
        },
      },
      body: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Body',
          key: 'id',
        },
      },
      l_shoulder: {
        type: Sequelize.INTEGER,
        // allowNull: false,
        // references: {
        //   model: '',
        //   key: 'id',
        // },
      },
      left_arm: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'LeftArm',
          key: 'id',
        },
      },
      l_leg: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'LLEg',
          key: 'id',
        },
      },
      r_shoulder: {
        type: Sequelize.INTEGER,
        // allowNull: false,
        // references: {
        //   model: 'Users',
        //   key: 'id',
        // },
      },
      right_arm: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'RightArm',
          key: 'id',
        },
      },
      r_leg: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'RLeg',
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
    });
  },
  async down(queryInterface, Sequelize) {
    options.tableName = "Mechs"
    await queryInterface.dropTable('Mechs');
  }
};
