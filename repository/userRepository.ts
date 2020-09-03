import models from '../models/index'

class UserRepository {
  pkToTuple: Map<any, any>

  constructor() {
    this.pkToTuple = new Map()
  }

  async init() {
    const rows = await models.User.findAll()
    rows.forEach((row: any) => {
      const { id } = row
      this.pkToTuple.set(id, row)
    })
  }

  getFullName(id: any) {
    if (this.pkToTuple.has(id)) {
      const tuple = this.pkToTuple.get(id)
      return `${tuple.firstName} ${tuple.lastName}`
    } else {
      return ''
    }
  }
}

const userRepository = new UserRepository()
export { userRepository }
