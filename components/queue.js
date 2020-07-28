import React, { Component } from 'react'
import { Label, Button } from 'semantic-ui-react'
import styled from 'styled-components'

const QueueDiv = styled.div`
  grid-gap: 2vh;
`

const QueueLabel = styled(Label)`
  text-align: center;
`

export default class Queue extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayStudentsStyle: { display: 'grid' },
      iconToDisplay: 'caret square down outline',
    }
  }

  componentDidMount() {
    const url = 'ws://localhost:8080'
    new WebSocket(url)
  }

  isStudentDisplayed() {
    let { display } = this.state.displayStudentsStyle
    return display === 'grid'
  }

  alterStudentDisplay() {
    let displayStudentsStyle = this.isStudentDisplayed()
      ? { display: 'none' }
      : { display: 'grid' }

    let iconToDisplay = this.isStudentDisplayed()
      ? 'caret square up outline'
      : 'caret square down outline'

    this.setState({ displayStudentsStyle, iconToDisplay })
  }

  render() {
    return (
      <QueueDiv style={{ display: 'grid' }}>
        <Button.Group size="huge" fluid>
          <Button icon={'angle left'} content="Queue" />
          <Button
            icon={this.state.iconToDisplay}
            onClick={this.alterStudentDisplay.bind(this)}
          />
        </Button.Group>

        <br></br>
        <QueueDiv style={this.state.displayStudentsStyle}>
          <QueueLabel>Jonathan Ou</QueueLabel>
          <QueueLabel>Jonathan Ou</QueueLabel>
          <QueueLabel>Jonathan Ou</QueueLabel>
          <QueueLabel>Jonathan Ou</QueueLabel>
        </QueueDiv>
      </QueueDiv>
    )
  }
}
