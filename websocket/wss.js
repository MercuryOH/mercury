const WebSocket = require('ws')
const { courseQueue } = require('./coursequeue')
const { webSocketConnectionManager } = require('./connectionmanager')

class WebSocketServer {
  start() {
    const webSocketServer = new WebSocket.Server({
      port: 8080 || process.env.PORT,
    })

    webSocketServer.on('connection', (ws) => {
      /**
       * Handle messages that are sent by the client
       */

      ws.on('message', (message) => {
        let { courseId, msgType, msg } = JSON.parse(message)

        switch (msgType) {
          case 'greeting':
            webSocketConnectionManager.addSocketForCourse(courseId, ws)
            break

          case 'addToQueue':
            const studentToAdd = JSON.parse(msg)
            courseQueue.addStudentToQueue(
              courseId,
              `${studentToAdd.firstName} ${studentToAdd.lastName}`
            )
            break

          case 'removeFromQueue':
            const studentToRemove = JSON.parse(msg)
            courseQueue.removeStudentFromQueue(
              courseId,
              `${studentToRemove.firstName} ${studentToRemove.lastName}`
            )
            break

          default:
            throw new Error(`Message ${msg} is incorrectly formatted`)
        }

        /**
         * Send back the updated queue to the websocket
         */

        ws.send(
          this.prepareMessage({
            msgType: 'queue',
            msg: courseQueue.getAllStudents(courseId),
          })
        )
      })

      /**
       * Handle when the client disconnects
       */

      ws.on('close', () => {
        webSocketConnectionManager.removeSocketFromCourse(ws)
      })
    })
  }

  prepareMessage(msg) {
    return JSON.stringify(msg)
  }
}

module.exports = {
  webSocketServer: new WebSocketServer(),
}
