'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Languages', [
      {
        qId: 1,
        category: 'Languages',
        question: 'Назовите самый распространенный язык в мире',
        answer: 'китайский',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        qId: 2,
        category: 'Languages',
        question:
          'В каком языке нет деления на мужской, женский и средний род, нет склонений и спряжений, и тем не менее, в общей сложности порядка 16 времен?',
        answer: 'английский',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        qId: 3,
        category: 'Languages',
        question:
          'Название страны Россия звучит более или менее одинаково созвучно русскому языку практически на всех языках мира, кроме этого. Назовите язык, на котором Россия звучит как Венайа',
        answer: 'финский',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        qId: 4,
        category: 'Languages',
        question:
          'Назовите язык, на котором в сериале "Игра Престолов" говорила королева Дейнерис Бурерожденная?',
        answer: 'дотракийский',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Languages', null, {});
  },
};
