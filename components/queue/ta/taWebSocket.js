import { EventEmitter } from '../../util/EventEmitter'

const url = 'ws://localhost:8080'
const role = 'Instructor'

/**
 * QueueWebSocket controls the web socket business logic for the course queue and
 * functions as a controller for the queue state
 */

export default class TAWebSocketController {
  start({ me, courseId, onJoin }) {
    const { id } = me
    this.id = id
    this.courseId = courseId
    this.onJoin = onJoin
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

  activateTAWaitingModal(studentName) {
    EventEmitter.publish('activateTAWaitingModal', studentName)
  }

  removeTAWaitingModalOnTimeout() {
    EventEmitter.publish('removeTAWaitingModalOnTimeout')
  }

  removeTAWaitingModalOnAccept() {
    EventEmitter.publish('removeTAWaitingModalOnAccept')
  }

  removeTAWaitingModalOnDecline() {
    EventEmitter.publish('removeTAWaitingModalOnDecline')
  }

  updateStudentsInQueue(msg) {
    EventEmitter.publish('updateStudentsInQueue', msg)
  }

  updateCurrStudent(msg) {
    EventEmitter.publish('updateCurrStudent', msg)
  }

  processConnectionMessage(e) {
    const { msgType, msg } = JSON.parse(e.data)

    switch (msgType) {
      case 'queue': // in this case, the server will send a message indicating the current students in the queue
        // msg - the new queue
        this.updateStudentsInQueue(msg)
        break

      case 'nextStudentNotified': // in this case, the server lets the TA know that the student has been notified
        // msg - the name of the student who was notified
        this.activateTAWaitingModal(msg)
        break

      case 'studentTimeout': // in this case, the server lets the TA know that the student has timed out
        this.removeTAWaitingModalOnTimeout()
        break

      case 'studentJoin': // in this case, the TA's invitation to join has been accepted
        this.removeTAWaitingModalOnAccept()
        this.onJoin(JSON.parse(msg))
        break

      case 'studentDecline': // in this case the student declines the TA's invitation, and the TA's modal closes
        this.removeTAWaitingModalOnDecline()
        break

      case 'currStudentUpdate':
        this.updateCurrStudent(msg)
        break

      default:
        throw new Error(`Message ${msg} is incorrectly formatted`)
    }
  }

  getNextStudent() {
    this.connection.send(
      this.prepareMessage({
        msgType: 'next',
        msg: this.id,
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

  prepareMessage(msg) {
    const { courseId } = this
    const enrichedPayload = { ...msg, courseId, role }
    return JSON.stringify(enrichedPayload)
  }
}
