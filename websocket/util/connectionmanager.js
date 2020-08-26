/**
 * WebSocketConnectionManager handles the course-socket mapping, name-socket mapping, and broadcast
 */

class WebSocketConnectionManager {
  constructor() {
    this.courseToSockets = new Map()
    this.idToSocket = new Map()

    this.socketToCourse = new Map() // reverse mapping for deletion
    this.socketToId = new Map()
  }

  /**
   * Add a socket to a given course
   * @param {*} courseId
   * @param {*} socket
   */

  addSocketForCourse(courseId, socket) {
    /**
     * Update the data structures to account for the new socket
     */

    if (!this.courseToSockets.has(courseId)) {
      this.courseToSockets.set(courseId, new Set())
    }

    const currentConnections = this.courseToSockets.get(courseId)
    currentConnections.add(socket)
    this.socketToCourse.set(socket, courseId)
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
    /**
     * First, delete socket from socket-course mappings
     */

    if (this.socketToCourse.has(socket)) {
      const currCourse = this.socketToCourse.get(socket)

      if (this.courseToSockets.has(currCourse)) {
        const correspondingSocketSet = this.courseToSockets.get(currCourse)

        if (correspondingSocketSet.has(socket)) {
          correspondingSocketSet.delete(socket)
        }

        if (correspondingSocketSet.size == 0) {
          this.courseToSockets.delete(currCourse)
        }
      }

      this.socketToCourse.delete(socket)
    }

    /**
     * Second, delete socket from socket-id mappings
     */

    if (this.socketToId.has(socket)) {
      const userId = this.socketToId.get(socket)

      if (this.idToSocket.has(userId)) {
        this.idToSocket.delete(userId)
      }

      this.socketToId.delete(socket)
    }
  }

  associateUserWithSocket(id, socket) {
    this.idToSocket.set(id, socket)
    this.socketToId.set(socket, id)
  }

  getSocketOfUserID(id) {
    if (id == null) {
      throw new Error('null socket id')
    }

    if (this.idToSocket.has(id)) {
      return this.idToSocket.get(id)
    }

    return null
  }
}

module.exports = {
  webSocketConnectionManager: new WebSocketConnectionManager(),
}
