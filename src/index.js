import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './templates/styles/index.css'
import App from './templates/App.jsx'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './store/configStore/configStore'

const store = configureStore()

ReactDOM.render((
  <Provider store={store}>
    <App/>
  </Provider>
), window.document.getElementById('root'))

registerServiceWorker()


