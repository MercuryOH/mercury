/**
 * WebSocketConnectionManager handles the course-socket mapping and broadcast
 */

class WebSocketConnectionManager {
  constructor() {
    this.socketMap = new Map()
  }

  /**
   * Add a socket to a given course
   * @param {*} courseId
   * @param {*} socket
   */

  addSocketForCourse(courseId, socket) {
    if (!this.socketMap.has(courseId)) {
      this.socketMap.set(courseId, [])
    }

    const currentConnections = this.socketMap.get(courseId)
    currentConnections.push(socket)
    this.socketMap.set(courseId, currentConnections)
  }

  /**
   * Broadcast a message to all connections for a given course Id
   * @param {*} courseId
   * @param {*} message
   */

  broadcast(courseId, message) {
    if (!this.socketMap.has(courseId)) {
      throw new Error(`${courseId} not found`)
    }

    const connections = this.socketMap.get(courseId)
    connections.forEach((connection) => connection.send(message))
  }
}
