/**
 * WebSocketConnectionManager handles the course-socket mapping and broadcast
 */

class WebSocketConnectionManager {
  constructor() {
    this.courseToSockets = new Map()
    this.socketToCourse = new Map()
  }

  /**
   * Add a socket to a given course
   * @param {*} courseId
   * @param {*} socket
   */

  addSocketForCourse(courseId, socket) {
    if (!this.courseToSockets.has(courseId)) {
      this.courseToSockets.set(courseId, new Set())
    }

    this.socketToCourse.set(socket, courseId)

    const currentConnections = this.courseToSockets.get(courseId)
    currentConnections.add(socket)
    this.courseToSockets.set(courseId, currentConnections)
  }

  /**
   * Broadcast a message to all connections for a given course Id
   * @param {*} courseId
   * @param {*} message
   */

  broadcast(courseId, message) {
    if (!this.courseToSockets.has(courseId)) {
      throw new Error(`${courseId} not found`)
    }

    const connections = this.courseToSockets.get(courseId)
    connections.forEach((connection) => connection.send(message))
  }

  removeSocketFromCourse(socket) {
    if (!this.socketToCourse.has(socket)) {
      return
    }

    const courseId = this.socketToCourse.get(socket)

    if (this.courseToSockets.has(courseId)) {
      this.courseToSockets.get(courseId).delete(socket)
    }
  }
}
module.exports = {
  webSocketConnectionManager: new WebSocketConnectionManager(),
}
