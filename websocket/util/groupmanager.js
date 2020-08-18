/**
 * Map group ID to the set of websockets involved in the group
 * Controls deletion of groups when they become non-empty
 * Manages leader designation
 */

class GroupManager {
  constructor() {
    this.groupToSockets = new Map()
  }

  addSocketToGroup(groupId, ws) {
    if (!this.groupToSockets.has(groupId)) {
      this.groupToSockets.set(groupId, new Set())
    }

    this.groupToSockets.get(groupId).add(ws)
    console.log(`Group ${groupId} size: ${this.getGroupSize(groupId)}`)
  }

  removeSocketFromGroup(groupId, ws) {
    if (this.groupToSockets.has(groupId)) {
      const sockets = this.groupToSockets.get(groupId)
      if (sockets.has(ws)) {
        sockets.delete(ws)
      }
    }

    console.log(`Group ${groupId} size: ${this.getGroupSize(groupId)}`)
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
