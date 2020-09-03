import { Model } from 'sequelize'

export default (sequelize: any, DataTypes: any) => {
  class ClassUser extends Model {
    static associate(models: any) {}
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
