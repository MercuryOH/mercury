const { courseQueue } = require('../util/coursequeue')
const { webSocketConnectionManager } = require('../util/connectionmanager')
const { prepareMessage } = require('../util/util')

/**
 * Handles web socket messages sent by a student user
 */

const handleInstructorMessage = (ws, message) => {
  const { courseId, msgType, msg } = JSON.parse(message)

  switch (msgType) {
    case 'greeting':
      webSocketConnectionManager.addSocketForCourse(courseId, ws) // this websocket is now associated with the course
      webSocketConnectionManager.associateUserWithSocket(msg, ws)

      ws.send(
        prepareMessage({
          msgType: 'queue',
          msg: courseQueue.getAllStudents(courseId),
        })
      )
      break

    case 'next': // the TA has requested for the next student to be notified
      // msg - the TA's name
      let socketToSend = null
      let nextStudent = null

      while (courseQueue.size(courseId) > 0 && socketToSend === null) {
        // keep searching for the next web socket

        nextStudent = courseQueue.getNextStudent(courseId)
        socketToSend = webSocketConnectionManager.getSocketOfName(nextStudent)
      }

      if (socketToSend !== null) {
        socketToSend.send(
          prepareMessage({
            msgType: 'yourTurn',
            msg,
          })
        )

        ws.send(
          prepareMessage({
            msgType: 'nextStudentNotified',
            msg: nextStudent,
          })
        )
      }

      webSocketConnectionManager.broadcast(
        courseId,
        prepareMessage({
          msgType: 'queue',
          msg: courseQueue.getAllStudents(courseId),
        })
      )
      break

    default:
      throw new Error(
        `Message Type ${msgType} is not recognized for instructor`
      )
  }
}

module.exports = {
  handleInstructorMessage,
}
