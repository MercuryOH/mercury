const models = require('../models')

class UserRepository {
  constructor() {
    this.pkToTuple = new Map()
  }

  async init() {
    const rows = await models.User.findAll()
    rows.forEach((row) => {
      const { id } = row
      this.pkToTuple.set(id, row)
    })
  }
}

module.exports = {
  userRepository: new UserRepository(),
}
