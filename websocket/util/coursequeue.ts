/**
 * Basic queue data structure for maintaining the order of incoming students
 */
import { userRepository } from '../../repository/userRepository'

class Queue {
  map: Map<any, any>
  isAnonymous: Map<any, any>
  currStudents: Map<any, any>

  constructor() {
    this.map = new Map()
    this.isAnonymous = new Map()
    this.currStudents = new Map()
  }

  setCurrStudent(courseId: any, currStudentId: any) {
    this.currStudents.set(courseId, currStudentId)
  }

  getCurrStudent(courseId: any) {
    if (!this.currStudents.has(courseId)) {
      return {
        id: -1,
        name: '',
      }
    }

    return {
      id: this.currStudents.get(courseId),
      name: this.isStudentAnonymous(this.currStudents.get(courseId))
        ? 'Anonymous'
        : userRepository.getFullName(this.currStudents.get(courseId)),
    }
  }

  getCurrStudentID(courseId: any) {
    return this.currStudents.get(courseId)
  }

  /**
   * Add a student to the waiting queue for a course
   * @param course - the courseId to be updated
   * @param student - the student (id) to be added
   * @param anonymous - whether or not the student wants to be anonymous
   */

  addStudentToQueue(course: any, student: any, anonymous: any) {
    if (!this.map.has(course)) {
      // if the course is not stored yet
      this.map.set(course, []) // set the course value to an empty queue
    }

    const currentQueue = this.map.get(course)
    currentQueue.push(student)
    this.isAnonymous.set(student, anonymous)
  }

  /**
   * Get the next student of the course
   * @param course - the course to be queried
   * @returns int {student id of the next student}
   */

  getNextStudent(course: any) {
    if (this.map.has(course)) {
      const currentQueue = this.map.get(course)

      if (currentQueue.length > 0) {
        return currentQueue.shift()
      }

      throw new Error('Invalid: Queue is empty')
    }

    throw new Error('Invalid: Course not found')
  }

  size(course: any) {
    if (this.map.has(course)) {
      return this.map.get(course).length
    }

    return 0
  }

  /**
   *
   * @param {*} course
   * @param {*} student - the student id
   */
  removeStudentFromQueue(course: any, student: any) {
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

  isStudentAnonymous(id: any) {
    return this.isAnonymous.has(id) && this.isAnonymous.get(id)
  }

  getAllStudents(course: any) {
    if (this.map.has(course)) {
      return this.map.get(course).map((id: any) => {
        const fullName = this.isStudentAnonymous(id)
          ? 'Anonymous'
          : userRepository.getFullName(id)
        return { id, fullName }
      })
    }

    return []
  }
}

const courseQueue = new Queue()
export { courseQueue }
