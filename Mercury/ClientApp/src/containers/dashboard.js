import React from 'react'
import { withAuthenticationRequired } from '@auth0/auth0-react'

function DashboardContainer() {
  return <p>Protected Dashboard Page</p>
}

export default withAuthenticationRequired(DashboardContainer)
