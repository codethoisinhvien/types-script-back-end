'use strict';

module.exports = {
  up: (queryInterface:any, Sequelize:any) => {
    return queryInterface.bulkInsert(
      'questions',
      [
        {
          id:1,
          subject_id:1,
          content:'Công nghệ phần mềm là gì',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },
        
      ],
      {}
    );
  },

  down: (queryInterface:any, Sequelize:any) => {
    return queryInterface.bulkDelete('questions', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  
  }
};
