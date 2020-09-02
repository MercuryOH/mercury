import React from 'react'
import { Header } from 'semantic-ui-react'
import Layout from '../components/layout'
import { AuthRequired } from '../components/authProvider'

function HomePage() {
  return (
    <Layout
      left={<p>Some left content here...</p>}
      right={<p>Some right content here...</p>}
    >
      <Header>Hello World</Header>
    </Layout>
  )
}

export default AuthRequired(HomePage)
