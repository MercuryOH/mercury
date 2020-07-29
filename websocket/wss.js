const WebSocket = require('ws')
const { courseQueue } = require('../util/queue')
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

            ws.send(
              this.prepareMessage({
                msgType: 'queue',
                msg: courseQueue.getAllStudents(courseId),
              })
            )
            break

          default:
            throw new Error(`Message ${msg} is incorrectly formatted`)
        }
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
