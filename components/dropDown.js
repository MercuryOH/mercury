import React, { Component } from 'react'
import { Accordion, List, Button } from 'semantic-ui-react'
import { withRouter } from 'next/router'
import { AuthRequired } from '../components/authProvider'
import { EventEmitter } from '../components/util/EventEmitter'
import * as api from '../util/mercuryService'
import _ from 'lodash'
import Link from 'next/Link'
import ModifyClassesModal from './modifyClassesModal'

class DropDown extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userId: '',
      classes: [],
      colors: [
        'red',
        'orange',
        'yellow',
        'olive',
        'green',
        'teal',
        'blue',
        'violet',
        'purple',
        'pink',
        'brown',
        'gray',
        'black',
      ]
    }
  }

  componentDidMount() {
    api
      .getClasses()
      .then((classes) => this.setState({classes: classes}))
      .then(() => api.getMe())
      .then((me) => {this.setState({userId: me.id})})
  }

  render() {

  return (
    <div>
      <Accordion
        fluid
        exclusive={false}
        defaultActiveIndex={[0, 1]}
        style = {{fontSize: '1vw'}}
        panels={[
          {
            key: 'student',
            title: 'Student',
            content: {
              content: (
                <div>
                  <List relaxed>
                    <>
                    {_.zip(_.dropRight(this.state.colors, this.state.colors.length - this.state.classes.length),this.state.classes).filter((zipped) => zipped[1].role === 'Student').map((zipped) => (
                      <List.Item key={`class_${zipped[1].id}`}>
                        <List.Content>
                          <Link href={`/classes/${zipped[1].id}`}>
                            <Button
                              style={{
                                fontSize: '1vw',
                                width: '100%',
                                minWidth: '41px',
                              }}
                              color={zipped[0]}
                              content={zipped[1].name}
                            />
                          </Link>
                        </List.Content>
                      </List.Item>
                    ))}
                    </>
                  </List>
                </div>
              ),
            },
          },
          {
            key: 'ta',
            title: 'TA',
            content: {
              content: (
                <div>
                  <List relaxed>
                  {_.zip(_.dropRight(this.state.colors, this.state.colors.length - this.state.classes.length),this.state.classes).filter((zipped) => zipped[1].role === 'Professor').map((zipped) => (
                    <List.Item key={`class_${zipped[1].id}`}>
                      <List.Content>
                          <Button
                            style={{
                              fontSize: '1vw',
                              width: '100%',
                              minWidth: '41px',
                            }}
                            color={zipped[0]}
                            content={zipped[1].name}
                            onClick={()  => {
                              EventEmitter.publish('createTAOffice', {classId: zipped[1].id, userId: this.state.userId})
                              this.props.router.push(`/classes/${zipped[1].id}`)
                            }}
                          />
                      </List.Content>
                    </List.Item>
                  ))}
                  </List>
                </div>
              ),
            },
          },
        ]}
      />
      <div
          style={{
            position: 'absolute',
            width: 'calc(100% - 68px)',
            bottom: 14,
            fontSize: '1vw',
            minWidth: '41px',
          }}
        >
          <ModifyClassesModal onSelect={this.modifyClasses} />
          </div>
    </div>
  )
}
}
export default (withRouter(DropDown))
