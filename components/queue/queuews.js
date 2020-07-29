const url = 'ws://localhost:8080'

/**
 * QueueWebSocket controls the web socket business logic for the course queue and
 * functions as a controller for the queue state
 */

export default class QueueWebSocket {
  constructor(component) {
    this.component = component
    this.connection = new WebSocket(url)
    this.connection.onopen = this.processConnectionOpen.bind(this)
    this.connection.onerror = this.processConnectionError.bind(this)
    this.connection.onmessage = this.processConnectionMessage.bind(this)
  }

  processConnectionOpen() {
    this.connection.send(
      this.prepareMessage({
        msgType: 'courseId',
        msg: this.component.state.courseId,
      })
    ) // notify the server which courseId this websocket belongs to
  }

  processConnectionError(error) {
    console.log(`WebSocket error: ${error}`)
  }

  processConnectionMessage(e) {
    const { msgType, msg } = JSON.parse(e.data)

    switch (msgType) {
      case 'queue': // in this case, the server will send a message indicating the current students in the queue
        this.component.setState({ studentsInQueue: msg })
        break

      default:
        throw new Error(`Message ${msg} is incorrectly formatted`)
    }
  }

  prepareMessage(msg) {
    return JSON.stringify(msg)
  }
}
