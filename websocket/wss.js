const WebSocket = require('ws')
const { webSocketConnectionManager } = require('./util/connectionmanager')
const { groupManager } = require('./util/groupmanager')
const { handleInstructorMessage } = require('./instructor/instructorHandler')
const { handleStudentMessage } = require('./student/studentHandler')

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
        webSocketConnectionManager.removeSocket(ws)
        await groupManager.removeSocket(ws)
      })
    })
  }
}

module.exports = {
  webSocketServer: new WebSocketServer(),
}
