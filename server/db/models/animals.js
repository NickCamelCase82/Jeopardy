const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Animals extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Animals.init(
    {
      qId: DataTypes.INTEGER,
      category: DataTypes.STRING,
      question: DataTypes.STRING,
      answer: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Animals',
    }
  );
  return Animals;
};
