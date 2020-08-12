const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    static associate(models) {
      Group.belongsTo(models.Class)
    }
  }

  Group.init(
    {
      name: DataTypes.STRING,
      type: DataTypes.STRING,
      sessionId: DataTypes.STRING,
      creatorId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Group',
    }
  )

  return Group
}
