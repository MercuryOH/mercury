import React from 'react'
import { useRouter } from 'next/router'
import { Grid, Header, Message, Image } from 'semantic-ui-react'
import { useAuth } from '../components/authProvider'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import HeadComponent from '../components/headComponent'
import GoogleLogin from 'react-google-login'

function LoginPage() {
  const router = useRouter()
  const { login } = useAuth()

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
            <Image
              src="/wave_dark.png"
              size="large"
              style={{ padding: '1%' }}
            />
            <Header
              as="h2"
              color="teal"
              textAlign="center"
              style={{ paddingBottom: '10%' }}
            >
              Mercury | Login
            </Header>

            <GoogleLogin
              clientId="1019939739333-mi49g41jn4u9v50nqqd538vsfpl3jf9s.apps.googleusercontent.com"
              buttonText="Login With School Email"
              onSuccess={handleSuccess}
              onFailure={handleFailure}
              cookiePolicy={'single_host_origin'}
            />
            <div style={{ paddingTop: '2%', color: 'white' }}>
              <a href="mailto:jz674@cornell.edu">
                Try out Mercury for your class! Contact Us
              </a>
            </div>
          </Grid.Column>
        </Grid>
        <NotificationContainer />
      </div>
    </>
  )
}

export default LoginPage
