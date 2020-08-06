'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Items',
     'title',
     { 
       type: Sequelize.STRING,
       allowNull: false,
     });
    await queryInterface.changeColumn('Items',
    'variantCover',
     { 
       type: Sequelize.STRING 
     });
     await queryInterface.changeColumn('Items',
     'volume',
      { 
        type: Sequelize.STRING 
      });
 },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};

