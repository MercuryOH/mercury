import React from 'react'
import { withAuthenticationRequired } from '@auth0/auth0-react'
import Layout from '../components/layout'

function DashboardContainer() {
  return <Layout>Hello World</Layout>
}

export default withAuthenticationRequired(DashboardContainer)
