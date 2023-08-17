'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Users', [{
          avatar: '/uploads/avatar1.png',
          username: 'TestUser',
          password: '$2a$10$bE3ovf9/Tiy/d68bwNUQ0.zCjwtNFq9ukg9h4rhKiHCb6x5ncKife', // 123456789
          email: 'test1@example.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          avatar: '/uploads/avatar2.png',
          username: 'TestUser2',
          createdAt: new Date(),
          updatedAt: new Date(),
        }],
      {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
