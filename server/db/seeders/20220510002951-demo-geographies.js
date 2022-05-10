'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Geographies', [
      {
        qId: 1,
        category: 'Geography',
        question: 'Кто пропил глобус?',
        answer: 'географ',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        qId: 2,
        category: 'Geography',
        question: 'Назовите самую большую по площади страну в мире',
        answer: 'россия',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        qId: 3,
        category: 'Geography',
        question:
          'Назовите страну, одновременно являющуюся и страной, и континентом',
        answer: 'австралия',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        qId: 4,
        category: 'Geography',
        question:
          'Назовите страну, которая изменила карту современного судоходства, прорыв канал, позволяющий попасть из Атлантического в Тихий океаны и обратно за считанные часы и ВВП которой практически на 100% состоит из доходов от пошлин за проход через этот канал?',
        answer: 'панама',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Geographies', null, {});
  },
};
