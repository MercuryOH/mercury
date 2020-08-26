const WebSocket = require('ws')
const { webSocketConnectionManager } = require('./util/connectionmanager')
const { groupManager } = require('./util/groupmanager')
const { handleInstructorMessage } = require('./instructor/instructorHandler')
const { handleStudentMessage } = require('./student/studentHandler')
const models = require('../models')
const { courseQueue } = require('./util/coursequeue')
const { prepareMessage } = require('./util/util')

class WebSocketServer {
  start() {
    const webSocketServer = new WebSocket.Server({
      port: 8080 || process.env.PORT,
    })

    webSocketServer.on('connection', (ws) => {
      /**
       * Handle messages that are sent by the client
       */

      ws.on('message', async (message) => {
        const { role } = JSON.parse(message)

        switch (role) {
          case 'Student':
            await handleStudentMessage(ws, message)
            break

          case 'Instructor':
            await handleInstructorMessage(ws, message)
            break

          default:
            throw new Error(`Role Type ${role} is not recognized`)
        }
      })

      /**
       * Handle when the client disconnects
       */

      ws.on('close', async () => {
        /**
         * Retrieve all relevant metadata
         */

        const courseId = webSocketConnectionManager.getSocketCourseID(ws)
        const userId = webSocketConnectionManager.getSocketUserId(ws)
        const groupId = groupManager.getSocketGroupId(ws)

        /**
         * Remove socket from the in-memory data structures
         */
        webSocketConnectionManager.removeSocket(ws)
        await groupManager.removeSocket(ws)

        /**
         * Remove user from the GroupUser table
         */

        if (userId && groupId) {
          await models.GroupUser.destroy({
            where: { GroupId: groupId, UserId: userId },
          })
        }

        /**
         * Check to see if the queue needs to be updated as well, and send out notifications to the class if so
         */

        if (courseQueue.getCurrStudentID() === userId) {
          // you happen to be the student who was currently being helped on the queue
          courseQueue.setCurrStudent(-1)
          webSocketConnectionManager.broadcast(
            courseId,
            prepareMessage({
              msgType: 'currStudentUpdate',
              msg: courseQueue.getCurrStudent(),
            })
          )
        }
      })
    })
  }
}

module.exports = {
  webSocketServer: new WebSocketServer(),
}
