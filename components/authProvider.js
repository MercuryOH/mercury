import React, { createContext, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import * as api from '../util/mercuryService'
import { Segment } from 'semantic-ui-react'

const MERCURY_TOKEN = 'mercury-token'

const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadUserFromCookies() {
      const token = Cookies.get(MERCURY_TOKEN)

      if (token) {
        api.setToken(`Bearer ${token}`)

        const currentUser = await api.getMe()
        if (currentUser) setUser(currentUser)
      }

      setLoading(false)
    }

    loadUserFromCookies()
  }, [])

  const login = async (email, password) => {
    const loginResponse = await api.postLogin(email, password)
    if (!loginResponse || !loginResponse.token) return null

    Cookies.set(MERCURY_TOKEN, loginResponse.token, { expires: 60 })
    api.setToken(`Bearer ${loginResponse.token}`)

    const currentUser = await api.getMe()
    if (currentUser) setUser(currentUser)

    return currentUser
  }

  const logout = async () => {
    Cookies.remove(MERCURY_TOKEN)
    setUser(null)
    await router.push('/login')
  }

  return (
    <AuthContext.Provider
      value={{ user, loading, login, logout, isAuthenticated: !!user }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function AuthRequired(Component) {
  return () => {
    const router = useRouter()
    const { isAuthenticated, loading } = useAuth()

    useEffect(() => {
      if (!isAuthenticated && !loading) router.push('/login')
    }, [loading, isAuthenticated])

    return loading ? (
      <Segment style={{ height: '100vh' }} loading />
    ) : (
      <Component {...arguments} />
    )
  }
}

export function useAuth() {
  return useContext(AuthContext)
}
