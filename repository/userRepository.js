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

  getFullName(id) {
    if (this.pkToTuple.has(id)) {
      const tuple = this.pkToTuple.get(id)
      return `${tuple.firstName} ${tuple.lastName}`
    } else {
      return ''
    }
  }
}

module.exports = {
  userRepository: new UserRepository(),
}
