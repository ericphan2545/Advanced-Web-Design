'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      { name: 'Áo thun Dev', price: 199.99, image: null, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Cốc cà phê coder', price: 9.5, image: null, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
