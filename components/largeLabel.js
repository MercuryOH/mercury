import React from 'react'
import { Label } from 'semantic-ui-react'
import PropTypes from 'prop-types'

function LargeLabel({ content }) {
  return (
    <div>
      <Label
        size="massive"
        style={{
          fontSize: '1.8vw',
          textAlign: 'center',
          width: '100%',
          marginBottom: '4%',
          minWidth: '41px',
        }}
      >
        {content}
      </Label>
    </div>
  )
}

LargeLabel.propTypes = {
  content: PropTypes.node,
}

export default LargeLabel
