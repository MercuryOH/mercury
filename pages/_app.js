import React, { Component } from 'react'
import Router from 'next/router'
import NProgress from 'nprogress' //nprogress module
import { AuthProvider } from '../components/authProvider'
import '../util/globalStyles.css'
import 'nprogress/nprogress.css' //styles of nprogress
import 'semantic-ui-css/semantic.min.css'

//Binding events.
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default class App extends Component {
  render() {
    const { Component, pageProps } = this.props
    return (
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    )
  }
}
