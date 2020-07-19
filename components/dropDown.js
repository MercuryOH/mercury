import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

function DropDown() {
  return (
    <div>
      <Button icon labelPosition="left" basic>
        <Icon name="angle down" />
        Students
      </Button>
    </div>
  )
}

export default DropDown
