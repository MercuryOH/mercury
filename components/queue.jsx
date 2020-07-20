import React, { Component } from 'react'
import { Label } from 'semantic-ui-react'
import styled from 'styled-components'

const QueueDiv = styled.div`
  display: grid;
  grid-gap: 2vh;
`

const QueueLabel = styled(Label)`
  text-align: center;
`

export default class Queue extends Component {
  render() {
    return (
      <QueueDiv>
        <QueueLabel>Queue</QueueLabel>
        <br></br>
        <QueueLabel>Jonathan Ou</QueueLabel>
        <QueueLabel>Jonathan Ou</QueueLabel>
        <QueueLabel>Jonathan Ou</QueueLabel>
        <QueueLabel>
          Jonathan Oufjljfljkfkjldfjkladfjlkljdfajlkdfljkadf
        </QueueLabel>
      </QueueDiv>
    )
  }
}
