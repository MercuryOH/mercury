import React, { Component } from 'react'
import { Label, Button } from 'semantic-ui-react'
import styled from 'styled-components'
import QueueWebSocket from './queuews'

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
      connection: null,
      studentsInQueue: [],
    }
  }

  componentDidMount() {
    let url = window.location.href
    this.courseId = Number(url.split('/')[4])
    const connection = new QueueWebSocket(this)
    this.setState({ connection })
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
    const queueLabels = this.state.studentsInQueue.map((student) => (
      <QueueLabel vertical style = {{fontSize: '1.2vw', textAlign: 'center', width: '99%', marginBottom: '2%', minWidth: '41px', marginLeft: '.8%', marginRight: '1%'}} key={student}>{student}</QueueLabel>
    ))

    return (
      <QueueDiv style={{ display: 'grid' }}>
        <Button.Group size="huge" style = {{marginBottom: 12, width: '100%'}} fluid>
          <Button icon={'angle left'} content="Queue" style = {{fontSize: '1.5vw', textAlign: 'left', width: '75%', marginBottom: '1%', minWidth: '41px'}} />
          <Button
            icon={this.state.iconToDisplay}
            onClick={this.alterStudentDisplay.bind(this)}
            style = {{fontSize: '1.5vw', textAlign: 'center', width: '15%', marginBottom: '1%', minWidth: '41px'}}
          />
        </Button.Group>

        <br></br>
        <QueueDiv style={this.state.displayStudentsStyle, {width: '100%', marginBottom: '2%', minWidth: '41px'} }>
          {queueLabels}
        </QueueDiv>
      </QueueDiv>
    )
  }
}
