const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    static associate(models) {
      Group.belongsTo(models.Class)
      Group.belongsTo(models.User) // the userID who created the group
    }
  }

  Group.init(
    {
      name: DataTypes.STRING,
      type: DataTypes.STRING,
      sessionId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Group',
    }
  )

  return Group
}
