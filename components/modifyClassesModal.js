import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Modal,
  Button,
  Checkbox,
  Table,
  Header,
  Input,
} from 'semantic-ui-react'
import _ from 'lodash'
import * as api from '../util/mercuryService'

class ModifyClassesModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modalState: false,
      classRoles: [],
    }
  }
  componentDidMount() {
    const classRoles = []
    api
      .getMe()
      .then((meData) => {
        this.user = meData
      })
      .then(() => api.getAllClasses())
      .then((classes) => {
        console.log(classes)
        classes.map((c) => {
          api.getClass(c.id).then((c) => {
            const userRole = c.users.find((u) => u.id === this.user.id)
            classRoles.push({
              classId: c.id,
              className: c.name,
              classRole: userRole ? userRole.role : '',
            })
          })
        })
        this.setState({ classRoles })
      })

      .catch(console.error)
  }

  handleSubmit = () => {
    this.setState({ modalState: false })
    // this.props.onSubmit(this.state.classRoles)
  }

  getTACell(classRole) {
    return classRole === 'Student' || classRole === '' ? (
      <Input placeholder={'Enter permission code...'}/>
    ) : (
      <Header as="h4">
        <Header.Content>{'verified ' + classRole}</Header.Content>
      </Header>
    )
  }

  render() {
    return (
      <div>
        <Modal
          style={{
            borderless: 'true',
            width: '40%',
            height: '40%',
          }}
          trigger={
            <Button
              color="teal"
              content="Modify Class"
              fluid
              style={{ fontSize: '1vw' }}
              onClick={() =>
                this.setState({ groupName: '', value: '', modalState: true })
              }
            />
          }
          open={this.state.modalState}
          onClose={() => this.setState({ modalState: false })}
          closeOnDimmerClick={false}
          closeOnEscape={false}
          closeIcon
        >
          <Modal.Content style={{ borderless: 'true' }}>
            <div
              style={{
                textAlign: 'center',
                padding: '5%',
                height: '50%',
                overflowY: 'auto',
              }}
            >
              <Table basic="very" celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell style={{ textAlign: 'center' }}>
                      Classes
                    </Table.HeaderCell>
                    <Table.HeaderCell style={{ textAlign: 'center' }}>
                      Student
                    </Table.HeaderCell>
                    <Table.HeaderCell style={{ textAlign: 'center' }}>
                      TA/Professor
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  {this.state.classRoles.map((c) => (
                    <Table.Row key={c.classId}>
                      <Table.Cell style={{ textAlign: 'center' }}>
                        <Header as="h4">
                          <Header.Content>{c.className}</Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell style={{ textAlign: 'center' }}>
                        <Checkbox
                          disabled={
                            c.classRole === 'Professor' || c.classRole === 'TA'
                          }
                          checked={c.classRole === 'Student'}
                        />
                      </Table.Cell>
                      <Table.Cell style={{ textAlign: 'center' }}>
                        {this.getTACell(c.classRole)}
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </div>

            <div
              style={{
                textAlign: 'center',
                width: '70%',
                height: '70%',
                margin: 'auto',
                padding: '5%',
              }}
            >
              <Button
                color="teal"
                style={{ width: '50%', fontSize: '1vw' }}
                onClick={this.handleSubmit}
                content={'Done'}
              />
            </div>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

ModifyClassesModal.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default ModifyClassesModal
