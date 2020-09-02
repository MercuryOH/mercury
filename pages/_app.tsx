import React, { Component } from 'react'
import Router from 'next/router'
import NProgress from 'nprogress' //nprogress module
import { AuthProvider } from '../components/authProvider'
import '../util/globalStyles.css'
import 'nprogress/nprogress.css' //styles of nprogress
import 'semantic-ui-css/semantic.min.css'
import 'react-notifications/lib/notifications.css'
import 'react-quill/dist/quill.snow.css' // ES6
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import type { AppProps } from 'next/app'

//Binding events.
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default class App extends Component<AppProps, {}> {
  render() {
    const { Component, pageProps }: AppProps = this.props
    return (
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    )
  }
}
