import React from 'react'
import Navbar from '../components/navbar'
import { Grid, Segment } from 'semantic-ui-react'

function HomePage() {
  return (
    <>
      <Navbar />
      <Grid style={{ height: 'calc(100vh - 40px)' }}>
        <Grid.Column style={{ height: '100%', paddingBottom: 0 }} width={4}>
          <Segment
            style={{ height: '100%' }}
            textAlign="center"
            inverted
            vertical
          >
            Left
          </Segment>
        </Grid.Column>
        <Grid.Column width={8}></Grid.Column>
        <Grid.Column
          style={{ height: '100%', paddingBottom: 0 }}
          widescreen={4}
        >
          <Segment
            style={{ height: '100%' }}
            textAlign="center"
            inverted
            vertical
          >
            Right
          </Segment>
        </Grid.Column>
      </Grid>
    </>
  )
}

export default HomePage
