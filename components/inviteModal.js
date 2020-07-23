import React from 'react'
import { Modal, Button, Header, Search } from 'semantic-ui-react'
import PropTypes from 'prop-types'

function InviteModal({ content, buttonText, placeholder }) {
  return (
    <div>
      <Modal
        style={{ borderless: 'true', width: '40%', height: '40%' }}
        trigger={<Button>+ New Group</Button>}
      >
        <Modal.Content style={{ borderless: 'true' }}>
          <Header
            style={{
              fontSize: '2vw',
              textAlign: 'center',
              width: '100%',
              padding: '5%',
              height: '50%',
              margin: 'auto',
            }}
          >
            {content}
          </Header>
          
            <Search
              fluid
              placeholder={placeholder}
              input={{ fluid: true }}
              style={{
                textAlign: 'center',
                padding: '5%',
              }}
           
            />

          {/* <div
            className="ui search"
            style={{
              textAlign: 'center',
              padding: '5%',
            }}
          >
            <div
              className="ui icon input"
              style={{
                textAlign: 'center',
                width: '100%',
                margin: 'auto',
              }}
            >
              <input className="prompt" type="text" placeholder={placeholder} />
              <i className="search icon"></i>
            </div>
            <div className="results"></div>
          </div> */}

          <div
            style={{
              textAlign: 'center',
              width: '70%',
              height: '70%',
              margin: 'auto',
              padding: '5%',
            }}
          >
            <Button color="teal" style={{ width: '50%' }}>
              {buttonText}
            </Button>
          </div>
        </Modal.Content>
      </Modal>
    </div>
  )
}

InviteModal.propTypes = {
  content: PropTypes.node,
  buttonText: PropTypes.string,
  placeholder: PropTypes.string,
}

export default InviteModal
