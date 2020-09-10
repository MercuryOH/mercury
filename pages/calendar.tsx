import React, { Component } from 'react'
import LargeLabel from '../components/largeLabel'
import DropDown from '../components/dropDown'
import Layout from '../components/layout'
import HeadComponent from '../components/headComponent'
import { EventEmitter } from '../components/util/EventEmitter'
import { AuthRequired } from '../components/authProvider'
import * as api from '../util/mercuryService'
import { NotificationContainer, NotificationManager } from 'react-notifications'

const colors = [
  'D50000', //red
  'F4511E', //orange
  'F6BF26', //yellow
  'C0CA33', //olive
  '0B8043', //green
  '009688', //teal
  '4285F4', //blue
  '8E24AA', //violet
  '9E69AF', //purple
  'E67C73', //pink
  '795548', //brown
  'A79B8E', //gray
  '616161', //black
]

/**
 * For TypeScript, you need to specify the type of the props, and the type of the state, and pass it to the class Defintion
 */
interface CalendarProps {}

interface CalendarState {
  classes: Array<Class>
}

/**
 * Define the class type that is returned from the api
 */

interface Class {
  id: number
  name: string
  calendarId: number
  role: string
}

class Calendar extends Component<CalendarProps, CalendarState> {
  constructor(props: CalendarProps) {
    super(props)
    this.state = {
      classes: [],
    }
  }

  componentDidMount(): void {
    api.getClasses().then((classes: Array<Class>) => this.setState({ classes }))

    EventEmitter.subscribe('currentlyEnrolled', (classes: Array<Class>) => {
      this.setState({ classes })
    })
  }

  mergeCal(classList: Array<Class>): string {
    let src = 'https://calendar.google.com/calendar/embed?mode=WEEK&showTitle=0'
    classList
      .filter((cc) => cc.role !== '')
      .forEach((c) => {
        src =
          src +
          '&src=' +
          c.calendarId +
          '&color=%23' +
          colors[c.id % colors.length]
      })

    return src
  }

  render() {
    return (
      <>
        <HeadComponent />
        
        <Layout
          left={
            <div style={{ paddingLeft: 20, paddingRight: 20 }}>
              <LargeLabel content={<p>Classes</p>} />
              <DropDown />
            </div>
          }
        >
          <iframe
            src={this.mergeCal(this.state.classes)}
            style={{ border: '0' }}
            width={'100%'}
            height={'100%'}
            frameBorder={0}
            scrolling="no"
          />
        </Layout>
        <NotificationContainer />
      </>
    )
  }
}

export default AuthRequired(Calendar)
