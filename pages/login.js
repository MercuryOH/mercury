import React from 'react'
import { useRouter } from 'next/router'
import { Grid, Header, Message } from 'semantic-ui-react'
import { useAuth } from '../components/authProvider'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import HeadComponent from '../components/headComponent'
import GoogleLogin from 'react-google-login'

function LoginPage() {
  const router = useRouter()
  const { login } = useAuth()

  const handleLogin = async (values, { setSubmitting }) => {
    setSubmitting(true)

    const user = await login(values.email, values.password)

    if (user) {
      await router.push('/calendar')
    } else {
      NotificationManager.error('Username And/Or Password Are Incorrect')
    }

    setSubmitting(false)
  }

  const handleSuccess = async (response) => {
    const obj = response.profileObj
    login(obj.email, obj.givenName, obj.familyName, obj.imageUrl)
    await router.push('/calendar')
  }
  const handleFailure = (response) => {
    NotificationManager.error('Something went wrong. Please try again.')
  }

  return (
    <>
      <HeadComponent />
      <NotificationContainer />
      <div>
        <Grid
          textAlign="center"
          style={{ height: '100vh' }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450, minWidth: 300 }}>
            <Header as="h2" color="teal" textAlign="center">
              {/* <Image src={require('../public/wave.png')} /> */}
              Mercury | Login
            </Header>
            <GoogleLogin
              clientId="1019939739333-mi49g41jn4u9v50nqqd538vsfpl3jf9s.apps.googleusercontent.com"
              buttonText="Login with school email"
              onSuccess={handleSuccess}
              onFailure={handleFailure}
              cookiePolicy={'single_host_origin'}
            />
            <Message>
              <a href="#">Contact Us</a>
            </Message>
          </Grid.Column>
        </Grid>

        <NotificationContainer />
      </div>
    </>
  )
}

export default LoginPage
