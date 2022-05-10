const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Languages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Languages.init(
    {
      qId: DataTypes.INTEGER,
      category: DataTypes.STRING,
      question: DataTypes.STRING,
      answer: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Languages',
    }
  );
  return Languages;
};
