'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Items',
     'coloring',
     { 
       type: Sequelize.STRING 
     }),
    await queryInterface.addColumn('Items',
    'editor',
     { 
       type: Sequelize.STRING 
     })
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
