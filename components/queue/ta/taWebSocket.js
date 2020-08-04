const url = 'ws://localhost:8080'

/**
 * QueueWebSocket controls the web socket business logic for the course queue and
 * functions as a controller for the queue state
 */

export default class TAWebSocketController {
  constructor(component) {
    this.component = component
    this.started = false
  }

  start(fullName) {
    this.fullName = fullName
    this.connection = new WebSocket(url)
    this.connection.onopen = this.processConnectionOpen.bind(this)
    this.connection.onerror = this.processConnectionError.bind(this)
    this.connection.onmessage = this.processConnectionMessage.bind(this)
    this.started = true
  }

  hasStarted() {
    return this.started
  }

  processConnectionOpen() {
    const { fullName } = this

    this.connection.send(
      this.prepareMessage({
        msgType: 'greeting',
        msg: fullName,
      })
    ) // notify the server which courseId this websocket belongs to
  }

  processConnectionError(error) {
    console.log(`WebSocket error: ${error}`)
  }

  activateTAWaitingModal(studentName) {
    this.component.setState({
      inviteNextStudent: true,
      nextStudentName: studentName,
    })
  }

  removeTAWaitingModal() {
    this.component.setState({
      inviteNextStudent: false,
      nextStudentName: '',
    })
  }

  updateStudentsInQueue(msg) {
    this.component.setState({ studentsInQueue: msg })
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
        this.removeTAWaitingModal()
        break
      default:
        throw new Error(`Message ${msg} is incorrectly formatted`)
    }
  }

  getNextStudent() {
    this.connection.send(
      this.prepareMessage({
        msgType: 'next',
        msg: this.fullName,
      })
    )
  }

  prepareMessage(msg) {
    const { courseId } = this.component
    const enrichedPayload = { ...msg, courseId }
    return JSON.stringify(enrichedPayload)
  }
}
