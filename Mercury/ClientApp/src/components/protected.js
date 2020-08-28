import React, { useEffect, useState } from 'react'
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react'
import * as api from '../services/api'
import * as rt from '../services/realtime'

function Protected({ children }) {
  const { getAccessTokenSilently } = useAuth0()
  const [hasAccessToken, setHasAccessToken] = useState(false)

  useEffect(() => {
    getAccessTokenSilently()
      .then((token) => {
        let accessToken = `Bearer ${token}`

        api.setToken(accessToken)

        rt.init(token)
          .then(() => {
            setHasAccessToken(true)
          })
          .catch(console.error)
      })
      .catch(console.error)
  }, [])

  return hasAccessToken && children
}

export default withAuthenticationRequired(Protected)
