import React, { Component } from 'react'
import { Accordion, List, Button} from 'semantic-ui-react'

export default class DropDown extends Component {
  state = { activeIndexs: [] }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndexs } = this.state
    const newIndex = activeIndexs

    const currentIndexPosition = activeIndexs.indexOf(index)
    if (currentIndexPosition > -1) {
      newIndex.splice(currentIndexPosition, 1)
    } else {
      newIndex.push(index)
    }

    this.setState({ activeIndexs: newIndex })
  }

  render() {
    const { activeIndexs } = this.state

    return (
      <div>
        {/* <Accordion>
          <Accordion.Title
            active={activeIndexs.includes(0)}
            index={0}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" style = {{fontSize: '1vw', width: '20%', float: 'left'}}/>
            <p style = {{fontSize: '1vw', width: '75%', float: 'left', marginBottom: '4%'}}>Student</p>
          </Accordion.Title>
          <Accordion.Content active={activeIndexs.includes(0)}>
            <div className="ui selection list" style = {{fontSize: '1vw', width: '100%'}}>
              <a className="item">
                <div style = {{fontSize: '1vw', width: '100%', marginBottom: '4%'}} className="ui blue horizontal label">CS 2110</div>
              </a>
              <a className="item">
                <div style = {{fontSize: '1vw', width: '100%', marginBottom: '4%'}} className="ui green horizontal label">CS 2800</div>
              </a>
              <a className="item">
                <div style = {{fontSize: '1vw', width: '100%', marginBottom: '4%'}} className="ui purple horizontal label">Math 2940</div>
              </a>
            </div>
          </Accordion.Content>

          <Accordion.Title
            active={activeIndexs.includes(1)}
            index={1}
            onClick={this.handleClick}
          >
            <Icon style = {{fontSize: '1vw', width: '20%', float: 'left'}} name="dropdown" />
            <p style = {{fontSize: '1vw', width: '75%', float: 'left', marginBottom: '4%'}}>TA</p>
          </Accordion.Title>
          <Accordion.Content active={activeIndexs.includes(1)}>
            <div style = {{fontSize: '1vw', width: '100%'}} className="ui selection list">
              <a className="item">
                <div style = {{fontSize: '1vw', width: '100%', marginBottom: '4%'}} className="ui orange horizontal label">CS 1110</div>
              </a>
            </div>
          </Accordion.Content>
        </Accordion> */}
        <Accordion
          fluid
          exclusive={false}
          defaultActiveIndex={[0, 1]}
          panels={[
            {
              key: 'student',
              title: 'Student',
              content: {
                content: (
                  <div style={{ paddingLeft: 20, paddingRight: 20}}>
                    <List relaxed>
                      <List.Item>
                        <List.Content>
                          <Button color="blue" style={{width: '100%'}}>CS 2110</Button>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                        <Button color="green" style={{width: '100%'}}>CS 2800</Button>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                        <Button color="purple" style={{width: '100%'}}>MATH 2940</Button>
                        </List.Content>
                      </List.Item>
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
                  <div style={{ paddingLeft: 20, paddingRight: 20}}>
                    <List relaxed>
                      <List.Item>
                        <List.Content>
                        <Button color="orange" style={{width: '100%'}}>CS1110</Button>
                        </List.Content>
                      </List.Item>
                    </List>
                  </div>
                ),
              },
            },
          ]}
        />
      </div>
    )
  }
}
