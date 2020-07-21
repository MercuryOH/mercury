import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import PropTypes from 'prop-types'

function DropDown({content}) {
  return (
    <div>
      <Button icon labelPosition="left" style = {{fontSize: '1vw', textAlign: 'left', width: '50%', marginBottom: '4%', backgroundColor: 'transparent', borderless: 'true'}}>
        <Icon name="angle down" style = {{backgroundColor: 'transparent'}}/>
        {content}
      </Button>
    </div>
  )
}

DropDown.propTypes = {
  content: PropTypes.node,
}

export default DropDown
