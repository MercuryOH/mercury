import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'

import Home from './containers/home'
import Dashboard from './containers/dashboard'

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href')

function App() {
  return (
    <Auth0Provider
      domain="mercury-development.us.auth0.com"
      clientId="GVN3BPWdu5p0T12gZGpBx42F5sV0VBu7"
      redirectUri={window.location.origin}
    >
      <BrowserRouter basename={baseUrl}>
        <Route path="/dashboard" component={Dashboard} />
        <Route exact path="/" component={Home} />
      </BrowserRouter>
    </Auth0Provider>
  )
}

export default App