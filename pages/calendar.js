import React, { Component } from 'react'
import LargeLabel from '../components/largeLabel'
import DropDown from '../components/dropDown'
import Layout from '../components/layout'
import HeadComponent from '../components/headComponent'
import { EventEmitter } from '../components/util/EventEmitter'
import { AuthRequired } from '../components/authProvider'
import * as api from '../util/mercuryService'

const colors = ['D50000', 'F4511E', 'F6BF26', 'C0CA33', '0B8043', '009688']

class Calendar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      classes: [],
    }
  }
  componentDidMount() {
    api.getClasses().then((classes) => this.setState({ classes }))

    EventEmitter.subscribe('currentlyEnrolled', (classes) => {
      this.setState({ classes })
    })
  }

  mergeCal(classList) {
    let src = 'https://calendar.google.com/calendar/embed?mode=WEEK&showTitle=0'
    classList
      .filter((cc) => cc.role !== '')
      .forEach((c) => {
        src =
          src +
          '&src=' +
          c.calendarId +
          '&color=%23' +
          colors[(c.id - 2) % colors.length]
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
      </>
    )
  }
}

export default AuthRequired(Calendar)
