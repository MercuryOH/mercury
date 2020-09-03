import { Model } from 'sequelize'

export default (sequelize: any, DataTypes: any) => {
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
