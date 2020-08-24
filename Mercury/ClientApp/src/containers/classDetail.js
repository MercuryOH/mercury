import React from 'react'
import { withAuthenticationRequired } from '@auth0/auth0-react'
import Layout from '../components/layout'

function ClassDetail() {
  return <Layout left={<p>Left stuff</p>}>Class detail page</Layout>
}

export default withAuthenticationRequired(ClassDetail)
