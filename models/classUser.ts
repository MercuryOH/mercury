const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class ClassUser extends Model {
    static associate(models) {}
  }

  ClassUser.init(
    {
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'ClassUser',
    }
  )
  return ClassUser
}
