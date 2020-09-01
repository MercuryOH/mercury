import React, { useEffect, useState } from 'react'
import { Button, List } from 'semantic-ui-react'
import * as api from '../../services/api'
import * as rt from '../../services/realtime'
import YourTurnModal from './yourTurnModal'

function Queue({ currentClass }) {
  const [queue, setQueue] = useState([])
  const [officeSessionId, setOfficeSessionId] = useState('')

  const handleQueueChange = (queueEvent) => {
    if (currentClass.id !== queueEvent.classId) return

    setQueue(queueEvent.queue)
  }

  const handleNextInQueue = ({ sessionId }) => {
    setOfficeSessionId(sessionId)
  }

  useEffect(() => {
    if (!currentClass || !currentClass.id) return

    rt.getConnection().on('QueueChange', handleQueueChange)
    rt.getConnection().on('NextStudent', handleNextInQueue)

    api
      .getQueue(currentClass.id)
      .then((queue) => setQueue(queue))
      .catch(console.error)
  }, [currentClass, currentClass.id])

  const handleJoinQueue = () => {
    rt.getConnection().invoke('Join', currentClass.id).catch(console.error)
  }

  const handleNextStudent = () => {
    rt.getConnection()
      .invoke('NextStudent', currentClass.id)
      .catch(console.error)
  }

  const handleJoinTA = () => {
    setOfficeSessionId('')
  }

  const handleDecline = () => {
    setOfficeSessionId('')
  }

  return (
    <>
      <YourTurnModal
        open={!!officeSessionId}
        onJoinTA={handleJoinTA}
        onDecline={handleDecline}
      />
      <Button
        fluid
        size="huge"
        content="Queue"
        style={{ marginBottom: '12px' }}
      />
      <List>
        {queue.map((student) => (
          <List.Item key={`queue_student_${student.id}`}>
            <Button fluid content={student.name} />
          </List.Item>
        ))}
      </List>
      <div
        style={{
          position: 'absolute',
          width: 'calc(100% - 38px)',
          bottom: 14,
        }}
      >
        {currentClass.role === 'Student' && (
          <Button
            fluid
            primary
            content="Join queue"
            onClick={handleJoinQueue}
          />
        )}
        {currentClass.role === 'TA' && (
          <Button fluid primary content="Next" onClick={handleNextStudent} />
        )}
      </div>
    </>
  )
}

export default Queue
