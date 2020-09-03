import { courseQueue } from '../util/coursequeue'
import { webSocketConnectionManager } from '../util/connectionmanager'
import { prepareMessage } from '../util/util'
import models from '../../models/index'
import { userRepository } from '../../repository/userRepository'
import { groupManager } from '../util/groupmanager'

/**
 * Handles web socket messages sent by a student user
 */

const handleStudentMessage = async (ws: any, message: string) => {
  const { courseId, msgType, msg } = JSON.parse(message)

  switch (msgType) {
    case 'greeting':
      webSocketConnectionManager.addSocketForCourse(courseId, ws) // this websocket is now associated with the course
      webSocketConnectionManager.associateUserWithSocket(msg, ws) // msg is the userId

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

    case 'addToQueue':
      const { id: studentId, anonymous } = msg
      courseQueue.addStudentToQueue(courseId, studentId, anonymous)

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
      const correspondingTA = webSocketConnectionManager.getSocketOfUserID(msg)

      correspondingTA.send(
        prepareMessage({
          msgType: 'studentTimeout',
          msg: 'studentTimeout',
        })
      )
      break

    case 'joinTA':
      const { group, TAId, me } = JSON.parse(msg)
      const { id } = me
      const TAToSend = webSocketConnectionManager.getSocketOfUserID(TAId)

      TAToSend.send(
        prepareMessage({
          msgType: 'studentJoin',
          msg: JSON.stringify(group),
        })
      )

      courseQueue.setCurrStudent(courseId, id)

      webSocketConnectionManager.broadcast(
        courseId,
        prepareMessage({
          msgType: 'currStudentUpdate',
          msg: courseQueue.getCurrStudent(courseId),
        })
      )

      break

    case 'declineTA':
      const TA = webSocketConnectionManager.getSocketOfUserID(msg)
      if (TA) {
        TA.send(
          prepareMessage({
            msgType: 'studentDecline',
            msg: 'studentDecline',
          })
        )
      } else {
        throw new Error('TA Not Found')
      }
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

    case 'sendOutInvite':
      const { sender, recepientId, group: currGroup } = JSON.parse(msg)
      const recepientws = webSocketConnectionManager.getSocketOfUserID(
        recepientId
      )

      recepientws.send(
        prepareMessage({
          msgType: 'receiveInvite',
          msg: JSON.stringify({ sender, currGroup }),
        })
      )
      break

    case 'requestJoinGroup':
      const { userId, group: groupToJoin } = JSON.parse(msg)
      const { UserId: groupLeader } = await models.Group.findByPk(
        groupToJoin.id
      )
      const groupLeaderSocket = webSocketConnectionManager.getSocketOfUserID(
        groupLeader
      )

      if (groupLeaderSocket) {
        // notify the group leader that you want to join his private group
        groupLeaderSocket.send(
          prepareMessage({
            msgType: 'groupJoinRequest',
            msg: JSON.stringify({
              userId,
              fullName: userRepository.getFullName(userId),
              group: groupToJoin,
            }),
          })
        )
      }

      break

    case 'acceptGroupJoinRequest':
      // msg = studentID of person who requested to join
      const socketToSend = webSocketConnectionManager.getSocketOfUserID(
        msg.studentId
      )
      if (socketToSend) {
        socketToSend.send(
          prepareMessage({
            msgType: 'groupJoinRequestApproved',
            msg: msg.group,
          })
        )
      }

      break

    case 'declineGroupJoinRequest':
      // msg = studentID of person who requested to join
      const socketToNotify = webSocketConnectionManager.getSocketOfUserID(
        msg.studentId
      )

      if (socketToNotify) {
        socketToNotify.send(
          prepareMessage({
            msgType: 'groupJoinRequestDeclined',
            msg: msg.group,
          })
        )
      }

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
      // msg - group ID, groupType and userId
      groupManager.addSocketToGroup(msg, ws)
      webSocketConnectionManager.broadcast(
        courseId,
        prepareMessage({
          msgType: 'fetchGroups',
          msg: 'fetchGroups',
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

    case 'declineWaitingForRequestApproval':
      const { UserId: leaderToSend } = msg
      const leaderToSendSocket = webSocketConnectionManager.getSocketOfUserID(
        leaderToSend
      )
      if (leaderToSendSocket) {
        leaderToSendSocket.send(
          prepareMessage({
            msgType: 'inviteStoppedWaitingForApproval',
            msg: 'inviteStoppedWaitingForApproval',
          })
        )
      }
      break

    default:
      throw new Error(`Message Type ${msgType} is not recognized for student`)
  }
}
export { handleStudentMessage }
