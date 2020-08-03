const url = 'ws://localhost:8080'

/**
 * QueueWebSocket controls the web socket business logic for the course queue and
 * functions as a controller for the queue state
 */

export default class QueueWebSocketController {
  constructor(component) {
    this.component = component
    this.started = false
  }

  start() {
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
    const { courseId } = this.component

    this.connection.send(
      this.prepareMessage({
        msgType: 'greeting',
        msg: courseId,
      })
    ) // notify the server which courseId this websocket belongs to
  }

  processConnectionError(error) {
    console.log(`WebSocket error: ${error}`)
  }

  activateYourTurnModal() {
    this.component.setState({ isYourTurn: true })
  }

  activateTAWaitingModal(studentName) {
    this.component.setState({
      inviteNextStudent: true,
      nextStudentName: studentName,
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

      case 'yourTurn': // in this case, which os only if you arw a student, the server notifies that it is your turn
        this.activateYourTurnModal()
        break

      case 'nextStudentNotified': // in this case, the server lets the TA know that the student has been notified
        // msg - the name of the student who was notified
        this.activateTAWaitingModal(msg)
        break

      default:
        throw new Error(`Message ${msg} is incorrectly formatted`)
    }
  }

  addMeToQueue() {
    const { me } = this.component.state

    this.connection.send(
      this.prepareMessage({
        msgType: 'addToQueue',
        msg: JSON.stringify(me),
      })
    )

    this.component.setState({ inQueue: true })
  }

  removeMeFromQueue() {
    const { me } = this.component.state

    this.connection.send(
      this.prepareMessage({
        msgType: 'removeFromQueue',
        msg: JSON.stringify(me),
      })
    )

    this.component.setState({ inQueue: false })
  }

  getNextStudent() {
    this.connection.send(
      this.prepareMessage({
        msgType: 'next',
        msg: 'next',
      })
    )
  }

  prepareMessage(msg) {
    const { courseId } = this.component
    const enrichedPayload = { ...msg, courseId }
    return JSON.stringify(enrichedPayload)
  }
}
