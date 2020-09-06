import { courseQueue } from '../util/coursequeue'
import { webSocketConnectionManager } from '../util/connectionmanager'
import { prepareMessage } from '../util/util'
import { userRepository } from '../../repository/userRepository'
import { groupManager } from '../util/groupmanager'

/**
 * Handles web socket messages sent by a student user
 */

const handleInstructorMessage = async (ws: any, message: string) => {
  const { courseId, msgType, msg } = JSON.parse(message)

  switch (msgType) {
    case 'greeting':
      webSocketConnectionManager.addSocketForCourse(courseId, ws) // this websocket is now associated with the course
      webSocketConnectionManager.associateUserWithSocket(msg, ws)

      ws.send(
        prepareMessage({
          msgType: 'greetingAck',
          msg: {
            currStudent: courseQueue.getCurrStudent(courseId),
            studentsInQueue: courseQueue.getAllStudents(courseId),
          },
        })
      )
      break

    case 'next': // the TA has requested for the next student to be notified
      // msg - the TA's id
      let socketToSend = null
      let nextStudent = null

      while (courseQueue.size(courseId) > 0 && socketToSend === null) {
        // keep searching for the next web socket

        nextStudent = courseQueue.getNextStudent(courseId)
        socketToSend = webSocketConnectionManager.getSocketOfUserID(nextStudent)
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
            msg: userRepository.getFullName(nextStudent),
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

    case 'callOver':
      courseQueue.setCurrStudent(courseId, -1)
      webSocketConnectionManager.broadcast(
        courseId,
        prepareMessage({
          msgType: 'currStudentUpdate',
          msg: courseQueue.getCurrStudent(courseId),
        })
      )
      break

    case 'userLeaveGroup':
      // msg - group metadata
      groupManager.removeSocketFromGroup(msg, ws)
      if (groupManager.getGroupSize(msg) === 0) {
        webSocketConnectionManager.broadcast(
          courseId,
          prepareMessage({
            msgType: 'fetchGroups',
            msg: 'fetchGroups',
          })
        )
      }
      break

    case 'userJoinGroup':
      // msg - JSON with group ID and user ID and groupType
      groupManager.addSocketToGroup(msg, ws)
      webSocketConnectionManager.broadcast(
        courseId,
        prepareMessage({
          msgType: 'fetchGroups',
          msg: 'fetchGroups',
        })
      )
      break

    case 'classGroupSetChanged':
      webSocketConnectionManager.broadcast(
        courseId,
        prepareMessage({
          msgType: 'fetchGroups',
          msg: 'fetchGroups',
        })
      )
      break

    case 'sendOutInvite':
      const { sender, recepientId, group: currGroup } = JSON.parse(msg)
      const recepientws = webSocketConnectionManager.getSocketOfUserID(
        recepientId
      )

      recepientws.send(
        prepareMessage({
          msgType: 'receiveInviteTA',
          msg: JSON.stringify({ sender, currGroup }),
        })
      )
      break

    case 'screenShareOn':
      // msg - person name and sessionId
      webSocketConnectionManager.broadcast(
        courseId,
        prepareMessage({
          msgType: 'fetchScreensharer',
          msg: msg,
        })
      )
      break

    case 'bidForLeaderPosition':
      // msg - new leader Id, old Leader Id, groupId
      await groupManager.appointNewLeader(msg)
      break

    case 'broadcastToClass':
      // msg - content and sender TA info
      webSocketConnectionManager.broadcast(
        courseId,
        prepareMessage({
          msgType: 'receiveBroadcast',
          msg: msg,
        })
      )
      break

    default:
      throw new Error(
        `Message Type ${msgType} is not recognized for instructor`
      )
  }
}

export { handleInstructorMessage }
