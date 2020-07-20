import React from 'react'
import Layout from '../components/layout'
import { Header } from 'semantic-ui-react'
import Queue from '../components/queue'

function HomePage() {
  return (
    <Layout left={<p>Some left content here...</p>} right={<Queue />}>
      <Header>Hello World</Header>
    </Layout>
  )
}

export default HomePage
