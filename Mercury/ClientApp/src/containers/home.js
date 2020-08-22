import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

function HomeContainer() {
  const { logout, loginWithRedirect, isAuthenticated, user } = useAuth0()

  return (
    <>
      {isAuthenticated ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={loginWithRedirect}>Login</button>
      )}

      {user && <p>{JSON.stringify(user, undefined, 2)}</p>}
    </>
  )
}

export default HomeContainer
