import { Model } from 'sequelize'

export default (sequelize: any, DataTypes: any) => {
  class Feedback extends Model {
    static associate(models: any) {
      Feedback.belongsTo(models.User)
      Feedback.belongsTo(models.Class)
    }
  }

  Feedback.init(
    {
      stars: DataTypes.INTEGER,
      comments: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Feedback',
    }
  )

  return Feedback
}
