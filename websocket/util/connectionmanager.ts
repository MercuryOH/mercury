/**
 * WebSocketConnectionManager handles the course-socket mapping, name-socket mapping, and broadcast
 */

class WebSocketConnectionManager {
  courseToSockets: Map<any, any>
  idToSocket: Map<any, any>
  socketToCourse: Map<any, any>
  socketToId: Map<any, any>

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

  addSocketForCourse(courseId: any, socket: any) {
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

  broadcast(courseId: any, message: any) {
    if (!this.courseToSockets.has(courseId)) {
      throw new Error(`courseId ${courseId} not found for broadcast`)
    }

    const connections = this.courseToSockets.get(courseId)
    connections.forEach((connection: any) => connection.send(message))
  }

  removeSocket(socket: any) {
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

  associateUserWithSocket(id: any, socket: any) {
    this.idToSocket.set(id, socket)
    this.socketToId.set(socket, id)
  }

  getSocketOfUserID(id: any) {
    if (id == null) {
      throw new Error('null socket id')
    }

    if (this.idToSocket.has(id)) {
      return this.idToSocket.get(id)
    }

    return null
  }

  getSocketCourseID(ws: any) {
    if (this.socketToCourse.has(ws)) {
      return this.socketToCourse.get(ws)
    }

    return null
  }

  getSocketUserId(ws: any) {
    if (this.socketToId.has(ws)) {
      return this.socketToId.get(ws)
    }

    return null
  }

  getActiveUsersInClass(courseId: number) {
    const activeUsers: number[] = []
    if (this.courseToSockets.has(courseId)) {
      const currentConnections = this.courseToSockets.get(courseId)
      currentConnections.forEach((connection: any) => {
        activeUsers.push(this.getSocketUserId(connection))
      })
    }
    return activeUsers
  }
}

const webSocketConnectionManager = new WebSocketConnectionManager()
export { webSocketConnectionManager }
