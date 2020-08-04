'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Items',
     'lettering',
     { 
       type: Sequelize.STRING 
     },
     'coloring',
     { 
       type: Sequelize.STRING 
     },
     'editor',
     { 
       type: Sequelize.STRING 
     },
     );
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
