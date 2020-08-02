/**
 * WebSocketConnectionManager handles the course-socket mapping, name-socket mapping, and broadcast
 */

class WebSocketConnectionManager {
  constructor() {
    this.courseToSockets = new Map()
    this.nameToSocket = new Map()
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
      throw new Error(`courseId ${courseId} not found for broadcast`)
    }

    const connections = this.courseToSockets.get(courseId)
    connections.forEach((connection) => connection.send(message))
  }

  removeSocket(socket) {
    this.courseToSockets.forEach((currSocket, courseId) => {
      if (socket === currSocket) {
        this.courseToSockets.delete(courseId)
      }
    })

    this.nameToSocket.forEach((currSocket, name) => {
      if (socket === currSocket) {
        this.nameToSocket.delete(name)
      }
    })
  }

  associateStudentWithSocket(name, socket) {
    this.nameToSocket.set(name, socket)
  }

  getSocketOfName(name) {
    if (this.nameToSocket.has(name)) {
      return this.nameToSocket.get(name)
    }

    return null
  }
}

module.exports = {
  webSocketConnectionManager: new WebSocketConnectionManager(),
}
