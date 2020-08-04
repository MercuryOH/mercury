const url = 'ws://localhost:8080'

/**
 * QueueWebSocket controls the web socket business logic for the course queue and
 * functions as a controller for the queue state
 */

export default class StudentWebSocketController {
  constructor(component) {
    this.component = component
  }

  start(fullName) {
    this.fullName = fullName
    this.connection = new WebSocket(url)
    this.connection.onopen = this.processConnectionOpen.bind(this)
    this.connection.onerror = this.processConnectionError.bind(this)
    this.connection.onmessage = this.processConnectionMessage.bind(this)
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

  activateYourTurnModal(TAName) {
    this.component.setState({ isYourTurn: true, TAName })
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
        // msg - the TA that notifies you
        this.activateYourTurnModal(msg)
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

  signalStudentTimeout(TAName) {
    this.connection.send(
      this.prepareMessage({
        msgType: 'studentTimeout',
        msg: TAName,
      })
    )
  }

  prepareMessage(msg) {
    const { courseId } = this.component
    const enrichedPayload = { ...msg, courseId }
    return JSON.stringify(enrichedPayload)
  }
}
