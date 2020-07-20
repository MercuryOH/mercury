import React, { Component } from 'react'
import { Label } from 'semantic-ui-react'
import styled from 'styled-components'

const QueueDiv = styled.div`
  display: grid;
  grid-gap: 2vh;
`

const QueueTitleLabel = styled(Label)`
  text-align: center;
  font-size: 1.42857143rem !important;
`

const QueueLabel = styled(Label)`
  text-align: center;
`

export default class Queue extends Component {
  render() {
    return (
      <QueueDiv>
        <QueueTitleLabel>Queue</QueueTitleLabel>
        <br></br>
        <QueueLabel>Jonathan Ou</QueueLabel>
        <QueueLabel>Jonathan Ou</QueueLabel>
        <QueueLabel>Jonathan Ou</QueueLabel>
        <QueueLabel>Jonathan Ou</QueueLabel>
      </QueueDiv>
    )
  }
}
