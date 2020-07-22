import React from 'react'
import { Label, Modal, Button, Header } from 'semantic-ui-react'
import PropTypes from 'prop-types'

function ModalPop({content}) {
  return (
    <div>
      <Modal style ={{borderless: 'true', width: '40%', height: '40%'}} trigger = {<Button>Modal Trigger Node</Button>}>
      <Modal.Content style ={{borderless: 'true'}}>
        <Header style = {{fontSize: '2vw', textAlign: 'center', width: '50%', padding: '7%', height: '50%', margin: 'auto'}}>{content}</Header>
        <div style = {{textAlign: 'center', width: '70%', height: '70%', margin: 'auto', padding: '7%',}}>
        <Button style = {{marginRight: '10%', marginBottom: '10%', fontSize: '1vw'}} negative>No</Button>
        <Button style = {{fontSize: '1vw'}} positive>Yes</Button>
        </div>
      </Modal.Content>
      </Modal>
    </div>
  )
}

ModalPop.propTypes = {
  content: PropTypes.node,
}

export default ModalPop
