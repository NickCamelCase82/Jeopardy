module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Footballs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      question: {
        type: Sequelize.STRING,
      },
      question2: {
        type: Sequelize.STRING,
      },
      question3: {
        type: Sequelize.STRING,
      },
      question4: {
        type: Sequelize.STRING,
      },
      question5: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Footballs');
  },
};
