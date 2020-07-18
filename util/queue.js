/**
 * Basic queue data structure for maintaining the order of incoming students
 */

class Queue {
  
  constructor() {
    this.map = new Map();
  }

  /**
   * Add a student to the waiting queue for a course
   * @param course - the course to be updated
   * @param student - the student to be added
   */
  
  addStudentToQueue(course, student) {

    if (!this.map.has(course)) { // if the course is not stored yet
      this.map.set(course, []) // set the course value to an empty queue
    }
    
    let currentQueue = this.map.get(course)
    currentQueue.push(student)

    this.map.set(course, currentQueue)
  }

  /**
   * Get the next student of the course
   * @param course - the course to be queried
   * @returns {any}
   */
  
  getNextStudent(course) {
    if (this.map.has(course)) {
      let currentQueue = this.map.get(course)

      if (currentQueue.length > 0) {
        return currentQueue.pop();
      }

      throw new Error("Invalid: Queue is empty")
    }

    throw new Error("Invalid: Course not found")
  }


}

module.exports = {
  "courseQueue" : new Queue()
}
