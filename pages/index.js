import React from 'react'
import Layout from '../components/layout'
import { Header } from 'semantic-ui-react'

function HomePage() {
  return (
    <Layout left={<p>Left</p>} right={<p>right</p>}>
      <Header>Hello World</Header>
    </Layout>
  )
}

export default HomePage
