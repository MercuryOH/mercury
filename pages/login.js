import React from 'react'
import * as yup from 'yup'
import { Formik } from 'formik'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'

const loginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
})

function LoginPage() {
  const handleLogin = (values, { setSubmitting }) => {
    setSubmitting(true)
    console.log(values)
  }

  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Mercury | Login
        </Header>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={loginSchema}
          onSubmit={handleLogin}
        >
          {({
            values,
            errors,
            touched,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <Form size="large" onSubmit={handleSubmit}>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Email address"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={getError(errors, touched, 'email')}
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={getError(errors, touched, 'password')}
                />

                <Button
                  fluid
                  color="teal"
                  size="large"
                  type="submit"
                  disabled={isSubmitting}
                  loading={isSubmitting}
                >
                  Login
                </Button>
              </Segment>
            </Form>
          )}
        </Formik>
        <Message>
          New to us? <a href="#">Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  )
}

function getError(errors, touched, name) {
  if (errors[name] && touched[name]) {
    return { content: errors[name] }
  }

  return null
}

export default LoginPage
