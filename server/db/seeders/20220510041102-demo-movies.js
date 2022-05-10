'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Movies', [
      {
        qId: 1,
        category: 'Movies',
        question:
          'Название компании, придумавшей целый цикл фильмов с вымышленными героями, так или иначе связанные одним сюжетом. Он даже так и назывется - Вселенная......',
        answer: 'марвел',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        qId: 2,
        category: 'Movies',
        question:
          'Назовите фамилию полузабытого на тот момент актера, обязанному Квентину Тарантино, пригласившим его на роль гангстера в свой фильм "Криминальное чтиво", резким взлетом своей карьеры?',
        answer: 'траволта',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        qId: 3,
        category: 'Movies',
        question:
          'Назовите фамилию братьев, с этого изобретения которых и начался, собственно, кинематограф ',
        answer: 'люмьеры',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        qId: 4,
        category: 'Movies',
        question:
          'Назовите фантастический фильм, главный герой и внешний вид которого приснился режиссеру, а его роботизированный красный глаз стал визитной карточкой самого персонажа.',
        answer: 'терминатор',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Movies', null, {});
  },
};
