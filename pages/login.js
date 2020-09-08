import React from 'react'
import * as yup from 'yup'
import { useRouter } from 'next/router'
import { Formik } from 'formik'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
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

function getError(errors, touched, name) {
  if (errors[name] && touched[name]) {
    return { content: errors[name] }
  }

  return null
}

export default LoginPage

// const loginSchema = yup.object({
//   email: yup.string().email().required(),
//   password: yup.string().min(8).required(),
// })

// function LoginPage() {
//   const router = useRouter()
//   const { login } = useAuth()

//   const handleLogin = async (values, { setSubmitting }) => {
//     setSubmitting(true)

//     const user = await login(values.email, values.password)

//     if (user) {
//       await router.push('/calendar')
//     } else {
//       NotificationManager.error('Username And/Or Password Are Incorrect')
//     }

//     setSubmitting(false)
//   }

//   return (
//     <>
//       <HeadComponent />
//       <div>
//         <Grid
//           textAlign="center"
//           style={{ height: '100vh' }}
//           verticalAlign="middle"
//         >
//           <Grid.Column style={{ maxWidth: 450, minWidth: 300 }}>
//             <Header as="h2" color="teal" textAlign="center">
//               Mercury | Login
//             </Header>
//             <Formik
//               initialValues={{ email: '', password: '' }}
//               validationSchema={loginSchema}
//               onSubmit={handleLogin}
//             >
//               {({
//                 values,
//                 errors,
//                 touched,
//                 isSubmitting,
//                 handleChange,
//                 handleBlur,
//                 handleSubmit,
//               }) => (
//                 <Form size="large" onSubmit={handleSubmit}>
//                   <Segment>
//                     <Form.Input
//                       fluid
//                       icon="user"
//                       iconPosition="left"
//                       placeholder="Email address"
//                       name="email"
//                       value={values.email}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       error={getError(errors, touched, 'email')}
//                     />
//                     <Form.Input
//                       fluid
//                       icon="lock"
//                       iconPosition="left"
//                       placeholder="Password"
//                       type="password"
//                       name="password"
//                       value={values.password}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       error={getError(errors, touched, 'password')}
//                     />

//                     <Button
//                       fluid
//                       color="teal"
//                       size="large"
//                       type="submit"
//                       disabled={isSubmitting}
//                       loading={isSubmitting}
//                     >
//                       Login
//                     </Button>
//                   </Segment>
//                 </Form>
//               )}
//             </Formik>
//             <Message>
//               New to us? <a href="#">Sign Up</a>
//             </Message>
//           </Grid.Column>
//         </Grid>
//         <NotificationContainer />
//       </div>
//     </>
//   )
// }

// function getError(errors, touched, name) {
//   if (errors[name] && touched[name]) {
//     return { content: errors[name] }
//   }

//   return null
// }

// export default LoginPage
