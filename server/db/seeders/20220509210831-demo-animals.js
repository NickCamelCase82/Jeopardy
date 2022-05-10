'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Animals', [
      {
        qId: 1,
        category: 'Animals',
        question: 'Самое быстрое млекопитающее на планете Земля',
        answer: 'гепард',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        qId: 2,
        category: 'Animals',
        question: 'К какому семейству относится волк?',
        answer: 'собачьих',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        qId: 3,
        category: 'Animals',
        question:
          'Назовите самого популярного теропода, существовавшего на планете Земля 65 млн. лет назад и ставшего отрицательным героем многих телевизионных фильмов',
        answer: 'тираннозавр',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        qId: 4,
        category: 'Animals',
        question:
          'Назовите ныне живущее водное млекопитающее, находящееся на вершине пищевой цепи и не имеюшее врагов в своей среде обитания',
        answer: 'косатка',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Animals', null, {});
  },
};
