const url = 'ws://localhost:8080'

/**
 * QueueWebSocket controls the web socket business logic for the course queue and
 * functions as a controller for the queue state
 */

export default class QueueWebSocket {
  constructor(component) {
    this.component = component
  }

  start() {
    this.connection = new WebSocket(url)
    this.connection.onopen = this.processConnectionOpen.bind(this)
    this.connection.onerror = this.processConnectionError.bind(this)
    this.connection.onmessage = this.processConnectionMessage.bind(this)
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
        this.updateStudentsInQueue(msg)
        break

      case 'yourTurn': // in this case, which os only if you arw a student, the server notifies that it is your turn
        this.activateYourTurnModal()
        break

      case 'nextStudentNotified':
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
  }

  removeMeFromQueue() {
    const { me } = this.component.state

    this.connection.send(
      this.prepareMessage({
        msgType: 'removeFromQueue',
        msg: JSON.stringify(me),
      })
    )
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
