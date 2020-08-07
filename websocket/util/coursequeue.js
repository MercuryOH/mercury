/**
 * Basic queue data structure for maintaining the order of incoming students
 */

class Queue {
  constructor() {
    this.map = new Map()
    // this.addStudentToQueue(2, 'Jonathan Ou')
    // this.addStudentToQueue(2, 'Jeffrey Zhang')
    // this.addStudentToQueue(2, 'Camilo')
  }

  /**
   * Add a student to the waiting queue for a course
   * @param course - the courseId to be updated
   * @param student - the student (full name) to be added
   */

  addStudentToQueue(course, student) {
    if (!this.map.has(course)) {
      // if the course is not stored yet
      this.map.set(course, []) // set the course value to an empty queue
    }

    const currentQueue = this.map.get(course)
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
      const currentQueue = this.map.get(course)

      if (currentQueue.length > 0) {
        return currentQueue.shift()
      }

      throw new Error('Invalid: Queue is empty')
    }

    throw new Error('Invalid: Course not found')
  }

  size(course) {
    if (this.map.has(course)) {
      return this.map.get(course).length
    }

    return 0
  }

  removeStudentFromQueue(course, student) {
    if (!this.map.has(course)) {
      return
    }

    const currentQueue = this.map.get(course)
    const indexOfStudent = currentQueue.indexOf(student)

    /**
     * If student is found, remove the student
     */

    if (indexOfStudent >= 0) {
      currentQueue.splice(indexOfStudent, 1)
    }

    this.map.set(course, currentQueue)
  }

  getAllStudents(course) {
    if (this.map.has(course)) {
      return this.map.get(course)
    }

    return []
  }
}

module.exports = {
  courseQueue: new Queue(),
}
