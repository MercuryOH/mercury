const url = 'ws://localhost:8080'
const role = 'Instructor'

/**
 * QueueWebSocket controls the web socket business logic for the course queue and
 * functions as a controller for the queue state
 */

export default class TAWebSocketController {
  constructor(component) {
    this.component = component
    this.started = false
  }

  start() {
    const { me } = this.component.state
    const { firstName, lastName } = me
    this.fullName = `${firstName} ${lastName}`

    this.connection = new WebSocket(url)
    this.connection.onopen = this.processConnectionOpen.bind(this)
    this.connection.onerror = this.processConnectionError.bind(this)
    this.connection.onmessage = this.processConnectionMessage.bind(this)
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

  removeTAWaitingModalOnTimeout() {
    const { nextStudentName } = this.component.state
    this.component.createTimeoutNotification(nextStudentName)

    this.component.setState({
      inviteNextStudent: false,
      nextStudentName: '',
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
        this.removeTAWaitingModalOnTimeout()
        break

      case 'studentJoin': // in this case, the TA's invitation to join has been accepted
        this.removeTAWaitingModal()
        this.component.props.onJoin(JSON.parse(msg))
        break

      case 'studentDecline': // in this case the student declines the TA's invitation, and the TA's modal closes
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
    const enrichedPayload = { ...msg, courseId, role }
    return JSON.stringify(enrichedPayload)
  }
}
