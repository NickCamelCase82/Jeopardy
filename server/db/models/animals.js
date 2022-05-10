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
      question: DataTypes.STRING,
      question2: DataTypes.STRING,
      question3: DataTypes.STRING,
      question4: DataTypes.STRING,
      question5: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Animals',
    }
  );
  return Animals;
};
