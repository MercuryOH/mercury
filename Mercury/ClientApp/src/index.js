import 'semantic-ui-css/semantic.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'

import App from './app'

const rootElement = document.getElementById('root')

ReactDOM.render(<App />, rootElement)

registerServiceWorker()
