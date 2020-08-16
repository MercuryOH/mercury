const { courseQueue } = require('../util/coursequeue')
const { webSocketConnectionManager } = require('../util/connectionmanager')
const { prepareMessage } = require('../util/util')

/**
 * Handles web socket messages sent by a student user
 */

const handleStudentMessage = (ws, message) => {
  const { courseId, msgType, msg } = JSON.parse(message)

  switch (msgType) {
    case 'greeting':
      webSocketConnectionManager.addSocketForCourse(courseId, ws) // this websocket is now associated with the course
      webSocketConnectionManager.associateUserWithSocket(msg, ws) // msg is the full name

      ws.send(
        prepareMessage({
          msgType: 'greetingAck',
          msg: {
            currStudent: courseQueue.getCurrStudent(),
            studentsInQueue: courseQueue.getAllStudents(courseId),
          },
        })
      )
      break

    case 'addToQueue':
      courseQueue.addStudentToQueue(courseId, msg)

      webSocketConnectionManager.broadcast(
        courseId,
        prepareMessage({
          msgType: 'queue',
          msg: courseQueue.getAllStudents(courseId),
        })
      )
      break

    case 'removeFromQueue':
      courseQueue.removeStudentFromQueue(courseId, msg)

      webSocketConnectionManager.broadcast(
        courseId,
        prepareMessage({
          msgType: 'queue',
          msg: courseQueue.getAllStudents(courseId),
        })
      )
      break

    case 'studentTimeout':
      const correspondingTA = webSocketConnectionManager.getSocketOfName(msg)

      correspondingTA.send(
        prepareMessage({
          msgType: 'studentTimeout',
          msg: 'studentTimeout',
        })
      )
      break

    case 'joinTA':
      const { group, TAName, me } = JSON.parse(msg)
      const { id } = me
      const TAToSend = webSocketConnectionManager.getSocketOfName(TAName)

      TAToSend.send(
        prepareMessage({
          msgType: 'studentJoin',
          msg: JSON.stringify(group),
        })
      )

      courseQueue.setCurrStudent(id)

      webSocketConnectionManager.broadcast(
        courseId,
        prepareMessage({
          msgType: 'currStudentUpdate',
          msg: courseQueue.getCurrStudent(),
        })
      )

      break

    case 'declineTA':
      const TA = webSocketConnectionManager.getSocketOfName(msg)

      TA.send(
        prepareMessage({
          msgType: 'studentDecline',
          msg: 'studentDecline',
        })
      )
      break

    case 'callOver':
      courseQueue.setCurrStudent(-1)
      webSocketConnectionManager.broadcast(
        courseId,
        prepareMessage({
          msgType: 'currStudentUpdate',
          msg: courseQueue.getCurrStudent(),
        })
      )
      break

    case 'sendOutInvite':
      const { sender, recepientId, group: currGroup } = JSON.parse(msg)
      const recepientws = webSocketConnectionManager.getSocketOfName(
        recepientId
      )

      recepientws.send(
        prepareMessage({
          msgType: 'receiveInvite',
          msg: JSON.stringify({ sender, currGroup }),
        })
      )
      break

    default:
      throw new Error(`Message Type ${msgType} is not recognized for student`)
  }
}

module.exports = {
  handleStudentMessage,
}
