require('dotenv').config()
import { Sequelize, DataTypes } from 'sequelize'
import ClassUser from './classUser'
import Class from './class'
import Feedback from './feedback'
import Group from './group'
import GroupUser from './groupUser'
import User from './user'

const db: any = {}

let sequelize = new Sequelize(process.env.DATABASE_URL, {
  logging: false,
})

const classUserModel = ClassUser(sequelize, DataTypes)
const classModel = Class(sequelize, DataTypes)
const feedbackModel = Feedback(sequelize, DataTypes)
const groupModel = Group(sequelize, DataTypes)
const groupUserModel = GroupUser(sequelize, DataTypes)
const userModel = User(sequelize, DataTypes)

db[classUserModel.name] = classUserModel
db[classModel.name] = classModel
db[feedbackModel.name] = feedbackModel
db[groupModel.name] = groupModel
db[groupUserModel.name] = groupUserModel
db[userModel.name] = userModel

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

export default db
