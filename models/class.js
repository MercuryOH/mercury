const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Class extends Model {
    static associate(models) {
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
