/**
 * Basic queue data structure for maintaining the order of incoming students
 */
import { userRepository } from '../../repository/userRepository'

interface CurrStudent {
  id: number
  name: string
}

interface Student {
  id: number
  fullName: string
}

class Queue {
  map: Map<number, Array<number>>
  isAnonymous: Map<number, boolean>
  currStudents: Map<number, number>

  constructor() {
    this.map = new Map()
    this.isAnonymous = new Map()
    this.currStudents = new Map()
  }

  setCurrStudent(courseId: number, currStudentId: number): void {
    this.currStudents.set(courseId, currStudentId)
  }

  getCurrStudent(courseId: number): CurrStudent {
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

  getCurrStudentID(courseId: any): number {
    return this.currStudents.get(courseId)
  }

  /**
   * Add a student to the waiting queue for a course
   * @param course - the courseId to be updated
   * @param student - the student (id) to be added
   * @param anonymous - whether or not the student wants to be anonymous
   */

  addStudentToQueue(course: number, student: number, anonymous: boolean): void {
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
   * @param courseId - the course id to be queried
   * @returns int {student id of the next student}
   */

  getNextStudent(courseId: number): number {
    if (this.map.has(courseId)) {
      const currentQueue = this.map.get(courseId)

      if (currentQueue.length > 0) {
        return currentQueue.shift()
      }

      throw new Error('Invalid: Queue is empty')
    }

    throw new Error('Invalid: Course not found')
  }

  size(course: number): number {
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

  removeStudentFromQueue(course: number, student: number): void {
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

  isStudentAnonymous(id: number): boolean {
    return this.isAnonymous.has(id) && this.isAnonymous.get(id)
  }

  getAllStudents(courseId: number): Array<Student> {
    if (this.map.has(courseId)) {
      return this.map.get(courseId).map((id: number) => {
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
