const WebSocket = require('ws')
const { courseQueue } = require('./coursequeue')
const { webSocketConnectionManager } = require('./connectionmanager')
const { default: next } = require('next')

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
        const { courseId, msgType, msg } = JSON.parse(message)

        switch (msgType) {
          case 'greeting':
            webSocketConnectionManager.addSocketForCourse(courseId, ws) // this websocket is now associated with the course
            break

          case 'addToQueue':
            const studentToAdd = JSON.parse(msg)
            const studentToAddName = `${studentToAdd.firstName} ${studentToAdd.lastName}`
            courseQueue.addStudentToQueue(courseId, studentToAddName)

            webSocketConnectionManager.associateStudentWithSocket(
              studentToAddName,
              ws
            )

            break

          case 'removeFromQueue':
            const studentToRemove = JSON.parse(msg)
            courseQueue.removeStudentFromQueue(
              courseId,
              `${studentToRemove.firstName} ${studentToRemove.lastName}`
            )
            break

          case 'next':
            let socketToSend = null
            let nextStudent = null

            while (courseQueue.size(courseId) > 0 && socketToSend === null) {
              // keep searching for the next web socket

              nextStudent = courseQueue.getNextStudent(courseId)
              socketToSend = webSocketConnectionManager.getSocketOfName(
                nextStudent
              )
            }

            if (socketToSend !== null) {
              socketToSend.send(
                this.prepareMessage({
                  msgType: 'yourTurn',
                  msg: 'yourTurn',
                })
              )

              ws.send(
                this.prepareMessage({
                  msgType: 'nextStudentNotified',
                  msg: nextStudent,
                })
              )
            }

            break

          default:
            throw new Error(`Message Type ${msgType} is not recognized`)
        }

        /**
         * Send back the updated queue to the websocket
         */

        webSocketConnectionManager.broadcast(
          courseId,
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
        webSocketConnectionManager.removeSocket(ws)
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
