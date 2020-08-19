const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class GroupUser extends Model {
    static associate(models) {}
  }

  GroupUser.init(
    {
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'GroupUser',
    }
  )

  return GroupUser
}
