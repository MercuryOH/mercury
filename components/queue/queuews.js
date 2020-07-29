const url = 'ws://localhost:8080'

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
      case 'queue':
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
