import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Grid, Segment } from 'semantic-ui-react'
import Navbar from './navbar'

const SideSegment = styled(Segment)`
  height: 100%;
  z-index: -1;
  background-color: white !important;
`

const SideColumn = styled(Grid.Column)`
  height: 100%;
  padding: 0 !important;
`

function Layout({ children, left, right }) {
  return (
    <>
      <Navbar />
      <Grid style={{ height: 'calc(100vh - 54px)', marginTop: 0 }}>
        <SideColumn width={3}>
          <SideSegment textAlign="center" vertical>
            {left}
          </SideSegment>
        </SideColumn>
        <Grid.Column width={10}>{children}</Grid.Column>
        <SideColumn width={3}>
          <SideSegment textAlign="center" vertical>
            {right}
          </SideSegment>
        </SideColumn>
      </Grid>
    </>
  )
}

Layout.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node,
  children: PropTypes.node,
}

export default Layout
