const url = 'ws://localhost:8080'
const role = 'Student'
import { EventEmitter } from '../../util/EventEmitter'

/**
 * QueueWebSocket controls the web socket business logic for the course queue and
 * functions as a controller for the queue state
 */

export default class StudentWebSocketController {
  start({ me, courseId }) {
    const { id } = me
    this.id = id
    this.courseId = courseId

    this.connection = new WebSocket(url)
    this.connection.onopen = this.processConnectionOpen.bind(this)
    this.connection.onerror = this.processConnectionError.bind(this)
    this.connection.onmessage = this.processConnectionMessage.bind(this)
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

      case 'yourTurn': // in this case, which os only if you arw a student, the server notifies that it is your turn
        // msg - the TA that notifies you
        this.activateYourTurnModal(msg)
        break

      case 'currStudentUpdate':
        this.updateCurrStudent(msg)
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

  prepareMessage(msg) {
    const { courseId } = this
    const enrichedPayload = { ...msg, courseId, role }
    return JSON.stringify(enrichedPayload)
  }
}
