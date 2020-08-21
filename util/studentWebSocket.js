const url = 'ws://localhost:8080'
import { EventEmitter } from '../components/util/EventEmitter'
const role = 'Student'
/**
 * QueueWebSocket controls the web socket business logic for the course queue and
 * functions as a controller for the queue state
 */

export default class StudentWebSocketClient {
  start({ me, courseId }) {
    const { id } = me
    this.id = id
    this.courseId = courseId

    this.connection = new WebSocket(url)
    this.connection.onopen = this.processConnectionOpen.bind(this)
    this.connection.onerror = this.processConnectionError.bind(this)
    this.connection.onmessage = this.processConnectionMessage.bind(this)

    this.defineEventEmitterCallbacks()
  }

  defineEventEmitterCallbacks() {
    EventEmitter.subscribe('greeting', () => {
      this.connection.send(
        this.prepareMessage({
          msgType: 'greeting',
          msg: this.id,
        })
      )
    })

    EventEmitter.subscribe('signalStudentTimeout', (TAName) =>
      this.signalStudentTimeout(TAName)
    )

    EventEmitter.subscribe('signalJoinTA', ({ group, TAName, me }) => {
      this.signalJoinTA(group, TAName, me)
    })

    EventEmitter.subscribe('signalDeclineTA', (TAName) => {
      this.signalDeclineTA(TAName)
    })

    EventEmitter.subscribe('signalCallOver', () => {
      this.signalCallOver()
    })

    EventEmitter.subscribe('signalAddMeToQueue', () => {
      this.addMeToQueue()
    })

    EventEmitter.subscribe('signalRemoveMeFromQueue', () => {
      this.removeMeFromQueue()
    })

    EventEmitter.subscribe(
      'sendOutInvite',
      ({ sender, recepientIds, group }) => {
        recepientIds.forEach((id) => {
          this.sendOutInvite(sender, id, group)
        })
      }
    )

    EventEmitter.subscribe('requestJoinGroup', (data) => {
      this.connection.send(
        this.prepareMessage({
          msgType: 'requestJoinGroup',
          msg: JSON.stringify(data),
        })
      )
    })

    EventEmitter.subscribe('acceptGroupJoinRequest', (msg) => {
      this.connection.send(
        this.prepareMessage({
          msgType: 'acceptGroupJoinRequest',
          msg,
        })
      )
    })

    EventEmitter.subscribe('declineGroupJoinRequest', (msg) => {
      this.connection.send(
        this.prepareMessage({
          msgType: 'declineGroupJoinRequest',
          msg,
        })
      )
    })

    EventEmitter.subscribe('classGroupSetChanged', (classId) => {
      this.connection.send(
        this.prepareMessage({
          msgType: 'classGroupSetChanged',
          msg: classId,
        })
      )
    })

    EventEmitter.subscribe('userLeaveGroup', (group) => {
      this.connection.send(
        this.prepareMessage({
          msgType: 'userLeaveGroup',
          msg: group,
        })
      )
    })

    EventEmitter.subscribe('userJoinGroup', (data) => {
      this.connection.send(
        this.prepareMessage({
          msgType: 'userJoinGroup',
          msg: data,
        })
      )
    })

    EventEmitter.subscribe('startLeaderAppointmentProcess', (data) => {
      this.connection.send(
        this.prepareMessage({
          msgType: 'startLeaderAppointmentProcess',
          msg: data,
        })
      )
    })

    EventEmitter.subscribe('sendLeaderAppointmentNotification', (data) => {
      this.connection.send(
        this.prepareMessage({
          msgType: 'leaderAppointmentNotification',
          msg: data,
        })
      )
    })
  }

  processConnectionOpen() {
    this.connection.send(
      this.prepareMessage({
        msgType: 'greeting',
        msg: this.id,
      })
    ) // notify the server which courseId this websocket belongs to
  }

  processConnectionError(error) {
    console.log(`WebSocket error: ${error}`)
  }

  activateYourTurnModal(TAName) {
    EventEmitter.publish('activateYourTurnModal', TAName)
  }

  updateStudentsInQueue(msg) {
    EventEmitter.publish('updateStudentsInQueue', msg)
  }

  updateCurrStudent(msg) {
    EventEmitter.publish('updateCurrStudent', msg)
  }

  initializeQueueOnGreeting(msg) {
    EventEmitter.publish('initializeQueueOnGreeting', msg)
  }

  activateReceiveInviteModal(msg) {
    EventEmitter.publish('activateReceiveInviteModal', msg)
  }

  activateGroupJoinRequestModal(msg) {
    EventEmitter.publish('activateGroupJoinRequestModal', msg)
  }

  joinPrivateGroupOnApproval(msg) {
    EventEmitter.publish('joinPrivateGroupOnApproval', msg)
  }

  notifyJoinRequestDeclined(msg) {
    EventEmitter.publish('notifyJoinRequestDeclined', msg)
  }

  notifyFetchGroups() {
    EventEmitter.publish('fetchGroups')
  }

  activateGroupLeaderModal(candidates) {
    EventEmitter.publish('activateGroupLeaderModal', candidates)
  }

  refreshScreenContainer() {
    EventEmitter.publish('refreshScreenContainer')
  }

  processConnectionMessage(e) {
    const { msgType, msg } = JSON.parse(e.data)

    switch (msgType) {
      case 'greetingAck':
        this.initializeQueueOnGreeting(msg)
        break

      case 'queue': // in this case, the server will send a message indicating the current students in the queue
        // msg - the new queue
        this.updateStudentsInQueue(msg)
        break

      case 'yourTurn': // in this case, which is only if you are a student, the server notifies that it is your turn
        // msg - the TA that notifies you
        this.activateYourTurnModal(msg)
        break

      case 'currStudentUpdate':
        this.updateCurrStudent(msg)
        break

      case 'receiveInvite': // in this case, another student invites you to their group
        // msg - sender, group
        this.activateReceiveInviteModal(msg)
        break

      case 'groupJoinRequest':
        this.activateGroupJoinRequestModal(msg) // msg - the name of the student wanting to join
        break

      case 'groupJoinRequestApproved':
        this.joinPrivateGroupOnApproval(msg)
        break

      case 'groupJoinRequestDeclined':
        this.notifyJoinRequestDeclined(msg)
        break

      case 'fetchGroups':
        this.notifyFetchGroups()
        break

      case 'retrieveAllLeaderCandidates':
        this.activateGroupLeaderModal(msg)
        break

      case 'newLeaderAppointed':
        this.refreshScreenContainer()
        break

      default:
        throw new Error(`Message ${msgType} is incorrectly formatted`)
    }
  }

  addMeToQueue() {
    this.connection.send(
      this.prepareMessage({
        msgType: 'addToQueue',
        msg: this.id,
      })
    )

    EventEmitter.publish('addMeToQueue')
  }

  removeMeFromQueue() {
    this.connection.send(
      this.prepareMessage({
        msgType: 'removeFromQueue',
        msg: this.id,
      })
    )

    EventEmitter.publish('removeMeFromQueue')
  }

  signalStudentTimeout(TAName) {
    this.connection.send(
      this.prepareMessage({
        msgType: 'studentTimeout',
        msg: TAName,
      })
    )
  }

  signalJoinTA(group, TAName, me) {
    this.connection.send(
      this.prepareMessage({
        msgType: 'joinTA',
        msg: JSON.stringify({ group, TAName, me }),
      })
    )

    EventEmitter.publish('clearLeftSide')
  }

  signalDeclineTA(TAName) {
    this.connection.send(
      this.prepareMessage({
        msgType: 'declineTA',
        msg: TAName,
      })
    )
  }

  signalCallOver() {
    this.connection.send(
      this.prepareMessage({
        msgType: 'callOver',
        msg: 'callOver',
      })
    )
  }

  sendOutInvite(sender, recepientId, group) {
    this.connection.send(
      this.prepareMessage({
        msgType: 'sendOutInvite',
        msg: JSON.stringify({ sender, recepientId, group }),
      })
    )
  }

  prepareMessage(msg) {
    const { courseId } = this
    const enrichedPayload = { ...msg, courseId, role }
    return JSON.stringify(enrichedPayload)
  }
}
