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

  addSocketToGroup(groupId, ws) {
    if (!this.groupToSockets.has(groupId)) {
      this.groupToSockets.set(groupId, new Set())
    }
    this.groupToSockets.get(groupId).add(ws)
  }

 removeSocketFromGroup(groupId, ws) {
    if (this.groupToSockets.has(groupId)) {
      const sockets = this.groupToSockets.get(groupId)
      if (sockets.has(ws)) {
        sockets.delete(ws)
      }
      if (this.groupToSockets.get(groupId).size === 0){
        models.Group.destroy({ where: { id: groupId } })
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
