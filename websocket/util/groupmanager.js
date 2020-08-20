/**
 * Map group ID to the set of websockets involved in the group
 * Controls deletion of groups when they become non-empty
 * Manages leader designation
 */

const models = require('../../models')

class GroupManager {
  constructor() {
    this.groupToSockets = new Map()
  }

  addSocketToGroup({ groupId, userId }, ws) {
    if (!this.groupToSockets.has(groupId)) {
      this.groupToSockets.set(groupId, new Set())
    }

    this.groupToSockets.get(groupId).add({ userId, ws })
  }

  async removeSocketFromGroup({ id: groupId, type }, sender) {
    if (this.groupToSockets.has(groupId)) {
      const sockets = this.groupToSockets.get(groupId)

      sockets.forEach((wsObject) => {
        if (wsObject.ws === sender) {
          sockets.delete(wsObject)
        }
      })

      if (sockets.size === 0 && type === 'group') {
        this.groupToSockets.delete(groupId)
        await models.Group.destroy({ where: { id: groupId } })
      }
    }
  }

  getGroupSize(groupId) {
    if (this.groupToSockets.has(groupId)) {
      return this.groupToSockets.get(groupId).size
    }

    return 0
  }
}

module.exports = {
  groupManager: new GroupManager(),
}
