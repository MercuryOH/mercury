import React from 'react'
import Layout from '../components/layout'
import { Header } from 'semantic-ui-react'

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

export default HomePage
