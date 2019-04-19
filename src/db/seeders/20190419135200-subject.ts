'use strict';

module.exports = {
  up: (queryInterface:any, Sequelize:any) => {
    return queryInterface.bulkInsert(
      'subjects',
      [
        {
          id:1,
          name:"Công nghệ phần mềm",
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },
        
      ],
      {}
    );
  },

  down: (queryInterface:any, Sequelize:any) => {
    return queryInterface.bulkDelete('subjects', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  
  }
};
