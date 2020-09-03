import { Model } from 'sequelize'

export default (sequelize: any, DataTypes: any) => {
  class Group extends Model {
    static associate(models: any) {
      Group.belongsTo(models.Class)
      Group.belongsTo(models.User) // the userID who created the group
      Group.belongsToMany(models.User, { through: 'GroupUser' })
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
