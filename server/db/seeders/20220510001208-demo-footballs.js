'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Footballs', [
      {
        qId: 1,
        category: 'Football',
        question: 'Страна, считающаяся изобретателем футбола',
        answer: 'Англия',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        qId: 2,
        category: 'Football',
        question:
          'Футбольная сборная, имеющая наибольшее количество международных титулов',
        answer: 'Бразилия',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        qId: 3,
        category: 'Football',
        question:
          'Футбольная сборная какой страны стала первым обладателем кубка мира в истории?',
        answer: 'Уругвай',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        qId: 4,
        category: 'Football',
        question:
          'Назовите город, который представляла команда, одержавшая сенсационную победу в финале Лиги Чемпионов в сезоне 1999-2000 годов в Барселоне на стадионе Ноу Камп, проигрывая по ходу встречи 0:1 и выиграв в дополнительное время 2:1',
        answer: 'Манчестер',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Footballs', null, {});
  },
};
