import React, { useEffect, useState } from 'react'
import * as api from '../../services/api'
import * as rt from '../../services/realtime'
import StudentQueueView from './student/studentQueueView'

function Queue({ classId }) {
  const [queue, setQueue] = useState([])

  const handleQueueChange = (queueEvent) => {
    if (classId !== queueEvent.classId) return

    setQueue(queueEvent.queue)
  }

  useEffect(() => {
    if (!classId) return

    rt.getConnection().on('QueueChange', handleQueueChange)

    api
      .getQueue(classId)
      .then((queue) => setQueue(queue))
      .catch(console.error)
  }, [classId])

  return <StudentQueueView queue={queue} />
}

export default Queue
