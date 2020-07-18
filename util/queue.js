class Queue {
  
  constructor() {
    this.map = new Map();
  }

  addStudentToClass(course, student) {

    if (!this.map.has(course)) { // if the course is not stored yet
      this.map.set(course, []) // set the course value to an empty queue
    }

    let currentQueue = this.map.get(course)
    currentQueue.push(student)

    this.map.set(course, currentQueue)
  }

  getNextStudent(course) {
    if (this.map.has(course)) {
      let currentQueue = this.map.get(course)

      if (currentQueue.length > 0) {
        return currentQueue.pop()
      }

      throw new Error("Invalid: Queue is empty")
    }

    throw new Error("Invalid: Course not found")
  }


}

module.exports = {
  "courseQueue" : new Queue()
}
