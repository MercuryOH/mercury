import { Model } from 'sequelize'

module.exports = (sequelize: any, DataTypes: any) => {
  class GroupUser extends Model {
    static associate(models: any) {}
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
