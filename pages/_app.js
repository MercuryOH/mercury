import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import Router from "next/router";
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress

//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default class App extends Component {

  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}
