'use strict';

module.exports = {
  up: (queryInterface:any, Sequelize:any) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          id:1,
          first_name: 'Jane',
          last_name: 'Doe',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
          email: 'jane.doe@email.com',
          username:"phongthien",
          password:"phongthien"        
        },
        {
          id:2,
          first_name: 'Jane',
          last_name: 'Doe',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
          email: 'jane.doe@email.com',
          username:"mod",
          password:"phongthien",
          role:2        
        },
        {
          id:3,
          first_name: 'Jane',
          last_name: 'Doe',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
          email: 'jane.doe@email.com',
          username:"admin",
          password:"13081999",

          role:3,        
        }
      ],
      {}
    );
  },

  down: (queryInterface:any, Sequelize:any) => {
    return queryInterface.bulkDelete('users', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
