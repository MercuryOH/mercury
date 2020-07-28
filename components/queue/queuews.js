const url = 'ws://localhost:8080'

export default class QueueWebSocket {
  constructor() {
    this.connection = new WebSocket(url)
    this.connection.onopen = this.processConnectionOpen.bind(this)
    this.connection.onerror = this.processConnectionError.bind(this)
    this.connection.onmessage = this.processConnectionMessage.bind(this)
  }

  processConnectionOpen() {
    this.connection.send('Message From Client')
  }

  processConnectionError(error) {
    console.log(`WebSocket error: ${error}`)
  }

  processConnectionMessage(e) {
    console.log(e.data)
  }
}
