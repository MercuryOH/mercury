const { courseQueue } = require('../util/coursequeue')
const { webSocketConnectionManager } = require('../util/connectionmanager')
const { prepareMessage } = require('../util/util')
const { userRepository } = require('../../repository/userRepository')
const { groupManager } = require('../util/groupmanager')

/**
 * Handles web socket messages sent by a student user
 */

const handleInstructorMessage = async (ws, message) => {
  const { courseId, msgType, msg } = JSON.parse(message)

  switch (msgType) {
    case 'greeting':
      webSocketConnectionManager.addSocketForCourse(courseId, ws) // this websocket is now associated with the course
      webSocketConnectionManager.associateUserWithSocket(msg, ws)

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

    case 'next': // the TA has requested for the next student to be notified
      // msg - the TA's name
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
      courseQueue.setCurrStudent(-1)
      webSocketConnectionManager.broadcast(
        courseId,
        prepareMessage({
          msgType: 'currStudentUpdate',
          msg: courseQueue.getCurrStudent(),
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
      // msg - JSON with group ID and user ID
      groupManager.addSocketToGroup(msg, ws)
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

    case 'startLeaderAppointmentProcess':
      // msg - the current group and the userID (i.e. the current leader)
      ws.send(
        prepareMessage({
          msgType: 'retrieveAllLeaderCandidates',
          msg: groupManager.retrieveAllLeaderCandidates(msg).map((userId) => ({
            userId,
            fullName: userRepository.getFullName(userId),
          })),
        })
      )

      break

    case 'leaderAppointmentNotification':
      await groupManager.appointNewLeader(msg)
      groupManager.broadcast(
        msg.groupId,
        prepareMessage({
          msgType: 'newLeaderAppointed',
          msg: msg.userId,
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
