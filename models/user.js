const { Model } = require('sequelize')
const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsToMany(models.Class, { through: 'ClassUser' })
    }

    isPasswordMatch(password) {
      return bcrypt.compareSync(password, this.password)
    }
  }

  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    }
  )

  User.beforeCreate((user) => {
    user.password = bcrypt.hashSync(user.password, 10)
  })

  return User
}
