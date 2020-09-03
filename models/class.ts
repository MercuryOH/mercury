import { Model } from 'sequelize'

export default (sequelize: any, DataTypes: any) => {
  class Class extends Model {
    static associate(models: any) {
      Class.belongsToMany(models.User, { through: 'ClassUser' })
      Class.hasMany(models.Group)
    }
  }

  Class.init(
    {
      name: DataTypes.STRING,
      calendarId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Class',
    }
  )
  return Class
}
