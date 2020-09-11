import React, { Component } from 'react'
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
import { EventEmitter } from './util/EventEmitter'
import { NotificationContainer, NotificationManager } from 'react-notifications'

interface ModifyClassesModalProps {}

interface ModifyClassesModalState {
  modalState: boolean
  classRoles: Array<ClassRole>
  user: User
  codeToClass: Map<number, string>
}

/** Type User returned from api.getMe */
interface User {
  id: number
  firstName: string
  lastName: string
  email: string
}

/** Type ClassRole returned from api.getClass */
interface ClassRole {
  id: number
  name: string
  calendarId: number
  role: string
  classCode: string
}

/** Type ClassGeneral returned from api.getAllClasses */
interface ClassGeneral {
  id: number
  name: string
  calendarId: number
  classCode: string
}

export default class ModifyClassesModal extends Component<
  ModifyClassesModalProps,
  ModifyClassesModalState
> {
  constructor(props: ModifyClassesModalProps) {
    super(props)

    this.state = {
      modalState: false,
      classRoles: [],
      user: { id: -1, firstName: '', lastName: '', email: '' },
      codeToClass: new Map(),
    }
  }

  componentDidMount() {
    const classRoles = []
    api
      .getMe()
      .then((user) => {
        this.setState({ user })
      })
      .then(() => api.getAllClasses())
      .then((classes) => {
        classes.map((cc: ClassGeneral) => {
          api.getClass(cc.id).then((c) => {
            const userRole = c.users.find(
              (u: User) => u.id === this.state.user.id
            )
            classRoles.push({
              ...cc,
              role: userRole ? userRole.role : '',
            })
          })
        })
        this.setState({ classRoles })
      })

      .catch(console.error)
  }

  handleSubmit = () => {
    this.setState({ modalState: false })
    //enroll as TA
    this.state.codeToClass.forEach((code, classId, map) => {
      const cr = _.find(this.state.classRoles, { id: classId })

      if (code === cr.classCode) {
        this.setState(
          (state) => ({
            classRoles: state.classRoles.map((cc) => {
              if (cc.id === classId) {
                return {
                  ...cc,
                  role: 'TA',
                }
              }

              return cc
            }),
          }),
          () => {
            const c = _.find(this.state.classRoles, { id: classId })
            if (c.role === 'TA') {
              api.postAddClass(classId, this.state.user.id, 'TA')
              EventEmitter.publish('currentlyEnrolled', this.state.classRoles)
            }
          }
        )
      } else {
        NotificationManager.error('Failed to register as TA for ' + cr.name)
      }
    })
    //enroll as student
    this.state.classRoles.forEach((c) => {
      if (c.role === '') {
        api.deleteClassUser(c.id, this.state.user.id)
      } else if (c.role === 'Student') {
        api.postAddClass(c.id, this.state.user.id, c.role)
      }
    })

    EventEmitter.publish('currentlyEnrolled', this.state.classRoles)
  }

  getTACell(classRole: ClassRole) {
    return classRole.role === 'Student' || classRole.role === '' ? (
      <Input
        placeholder={'Enter permission code...'}
        value={
          this.state.codeToClass.has(classRole.id)
            ? this.state.codeToClass.get(classRole.id)
            : ''
        }
        onChange={_.debounce(
          (e, { value }) => {
            this.setState({
              codeToClass: new Map(
                this.state.codeToClass.set(classRole.id, value)
              ),
            })
          },
          500,
          {
            leading: true,
          }
        )}
      ></Input>
    ) : (
      <Header as="h4">
        <Header.Content>{'verified ' + classRole.role}</Header.Content>
      </Header>
    )
  }

  render() {
    return (
      <div>
        <Modal
          style={{
            border: 'none',
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
                this.setState({ modalState: true, codeToClass: new Map() })
              }
            />
          }
          open={this.state.modalState}
          onClose={() => this.setState({ modalState: false })}
          closeOnDimmerClick={false}
          closeOnEscape={false}
          closeIcon
        >
          <Modal.Content style={{ borderless: 'true' }} scrolling>
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
                    <Table.Row key={c.id}>
                      <Table.Cell style={{ textAlign: 'center' }}>
                        <Header as="h4">
                          <Header.Content>{c.name}</Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell style={{ textAlign: 'center' }}>
                        <Checkbox
                          disabled={c.role === 'Professor' || c.role === 'TA'}
                          checked={c.role === 'Student'}
                          onChange={() =>
                            this.setState({
                              classRoles: this.state.classRoles.map((cc) => {
                                if (
                                  cc.id === c.id &&
                                  (cc.role === '' || cc.role === 'Student')
                                ) {
                                  return {
                                    ...cc,
                                    role: cc.role === '' ? 'Student' : '',
                                  }
                                }
                                return cc
                              }),
                            })
                          }
                        />
                        {/* {c.role === 'Professor' || c.role === 'TA' ? (
                          <Header as="h4">
                            <Header.Content>
                              {'verified ' + c.role}
                            </Header.Content>
                          </Header>
                        ) : (
                          <Checkbox
                            checked={c.role !== ''}
                            onChange={() =>
                              this.setState({
                                classRoles: this.state.classRoles.map((cc) => {
                                  if (
                                    cc.id === c.id &&
                                    (cc.role === '' || cc.role === 'Student')
                                  ) {
                                    return {
                                      ...cc,
                                      role: cc.role === '' ? 'Student' : '',
                                    }
                                  }
                                  return cc
                                }),
                              })
                            }
                          />
                        )} */}
                      </Table.Cell>
                      <Table.Cell style={{ textAlign: 'center' }}>
                        {this.getTACell(c)}
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
