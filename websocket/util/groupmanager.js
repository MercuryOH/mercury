/**
 * Map group ID to the set of websockets involved in the group
 * Controls deletion of groups when they become non-empty
 * Manages leader designation
 */

const models = require('../../models')
const { prepareMessage } = require('./util')

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

      const socketObjectToFind = [...sockets].filter(
        (wsObject) => wsObject.ws === sender
      )

      if (socketObjectToFind.length > 1) {
        throw new Error('Duplicate Socket Found')
      }

      /**
       * If the socket is found, then we can delete the socket
       */

      if (socketObjectToFind.length > 0) {
        sockets.delete(socketObjectToFind[0])

        /**First, check if the groupType is a private group */
        if (type === 'group') {
          /**If the group is now empty */
          if (sockets.size === 0) {
            // destroy the group
            this.groupToSockets.delete(groupId)
            await models.Group.destroy({ where: { id: groupId } })
          } else {
            // find the group and see if the leader has left
            const group = await models.Group.findOne({ where: { id: groupId } })

            // the leader has left
            if (group.UserId === socketObjectToFind[0].userId) {
              // notify everyone that the leader has left, and include the old leader Id
              this.broadcast(
                groupId,
                prepareMessage({
                  msgType: 'oldLeaderHasLeft',
                  msg: { groupId, userId: group.UserId },
                })
              )
            }
          }
        }
      }
    }
  }

  getGroupSize(groupId) {
    if (this.groupToSockets.has(groupId)) {
      return this.groupToSockets.get(groupId).size
    }

    return 0
  }

  async appointNewLeader({ newLeader, oldLeader, groupId }) {
    const group = await models.Group.findOne({ where: { id: groupId } })
    if (group.UserId === oldLeader) {
      // the first guy to get here gets appointed as leader
      try {
        await models.Group.update(
          { UserId: newLeader },
          { where: { id: groupId } }
        )

        this.broadcast(
          groupId,
          prepareMessage({
            msgType: 'wonLeaderBid',
            msg: newLeader,
          })
        )
      } catch (err) {
        console.log(err)
      }
    }
  }

  /**
   * Broadcast a message to a groupId
   * @param {*} groupId
   * @param {*} msg
   */

  broadcast(groupId, msg) {
    if (this.groupToSockets.has(groupId)) {
      const sockets = this.groupToSockets.get(groupId)
      sockets.forEach(({ ws }) => {
        ws.send(msg)
      })
    }
  }
}

module.exports = {
  groupManager: new GroupManager(),
}
