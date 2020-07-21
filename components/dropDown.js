import React, { Component } from 'react'
import { Accordion, Icon, Header } from 'semantic-ui-react'

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
        <Header as="h3" block textAlign="center">
          Classes
        </Header>
        <Accordion>
          <Accordion.Title
            active={activeIndexs.includes(0)}
            index={0}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            Student
          </Accordion.Title>
          <Accordion.Content active={activeIndexs.includes(0)}>
            <div class="ui selection list">
              <a class="item">
                <div class="ui blue horizontal label">CS 2110</div>
              </a>
              <a class="item">
                <div class="ui green horizontal label">CS 2800</div>
              </a>
              <a class="item">
                <div class="ui purple horizontal label">Math 2940</div>
              </a>
            </div>
          </Accordion.Content>

          <Accordion.Title
            active={activeIndexs.includes(1)}
            index={1}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            TA
          </Accordion.Title>
          <Accordion.Content active={activeIndexs.includes(1)}>
            <div class="ui selection list">
              <a class="item">
                <div class="ui orange horizontal label">CS 1110</div>
              </a>
            </div>
          </Accordion.Content>
        </Accordion>
      </div>
    )
  }
}
