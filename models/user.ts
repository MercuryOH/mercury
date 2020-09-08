import { Model } from 'sequelize'
import bcrypt from 'bcrypt'

export default (sequelize: any, DataTypes: any) => {
  class User extends Model {
    //password: string

    static associate(models: any) {
      User.belongsToMany(models.Class, { through: 'ClassUser' })
      User.hasMany(models.Group)
    }

    // isPasswordMatch(password: any) {
    //   return bcrypt.compareSync(password, this.password)
    // }
  }

  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      //password: DataTypes.STRING,
      profile: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    }
  )

  // User.beforeCreate((user) => {
  //   user.password = bcrypt.hashSync(user.password, 10)
  // })

  return User
}
