const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Feedback extends Model {
    static associate(models) {
      Feedback.belongsTo(models.User)
      Feedback.belongsTo(models.Class)
    }
  }

  Feedback.init(
    {
      stars: DataTypes.INTEGER,
      comments: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Feedback',
    }
  )

  return Feedback
}
