import React from 'react'
import { Button, List, Segment } from 'semantic-ui-react'

function StudentQueueView({ queue }) {
  return (
    <>
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
        <Button fluid primary content="Join queue" />
      </div>
    </>
  )
}

export default StudentQueueView
