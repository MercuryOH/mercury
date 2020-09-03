import wss from 'ws'
import { webSocketConnectionManager } from './util/connectionmanager'
import { groupManager } from './util/groupmanager'
import { handleInstructorMessage } from './instructor/instructorHandler'
import { handleStudentMessage } from './student/studentHandler'
import models from '../models/index'

class WebSocketServer {
  start() {
    const webSocketServer = new wss.Server({
      port: 8080 || Number(process.env.PORT),
    })

    webSocketServer.on('connection', (ws) => {
      /**
       * Handle messages that are sent by the client
       */

      ws.on('message', async (message: any) => {
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
      })
    })
  }
}

const webSocketServer = new WebSocketServer()
export { webSocketServer }
