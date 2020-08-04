'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      issue: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      publicationCoverDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      volume: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      volumeYear: {
        type: Sequelize.INTEGER
      },
      variantCover: {
        type: Sequelize.INTEGER
      },
      typeItem: {
        type: Sequelize.STRING
      },
      priceCover: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      pricePaid: {
        type: Sequelize.DECIMAL
      },
      datePaid: {
        type: Sequelize.DATEONLY
      },
      condition: {
        type: Sequelize.STRING
      },
      valuation: {
        type: Sequelize.DECIMAL
      },
      valuationDate: {
        type: Sequelize.DATEONLY
      },
      valuationSource: {
        type: Sequelize.STRING
      },
      publisher: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      keyWords: {
        type: Sequelize.STRING
      },
      boxNumber: {
        type: Sequelize.STRING
      },
      boxDivider: {
        type: Sequelize.STRING
      },
      boxLocation: {
        type: Sequelize.STRING
      },
      artist1: {
        type: Sequelize.STRING
      },
      artist2: {
        type: Sequelize.STRING
      },
      writer1: {
        type: Sequelize.STRING
      },
      writer2: {
        type: Sequelize.STRING
      },
      inker: {
        type: Sequelize.STRING
      },
      deleteFlag: {
        type: Sequelize.BOOLEAN
      },
      deleteReason: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Items');
  }
};