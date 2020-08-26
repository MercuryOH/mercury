import React, { useEffect, useState } from 'react'
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react'
import * as api from '../services/api'

function Protected({ children }) {
  const { getAccessTokenSilently } = useAuth0()
  const [hasAccessToken, setHasAccessToken] = useState(false)

  useEffect(() => {
    getAccessTokenSilently()
      .then((token) => {
        api.setToken(`Bearer ${token}`)
        setHasAccessToken(true)
      })
      .catch(console.error)
  }, [])

  return hasAccessToken && children
}

export default withAuthenticationRequired(Protected)
