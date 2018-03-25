import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import ReactDOM from 'react-dom'
import React from 'react'

import './assets/css/index.css'
import allReducers from './reducers'
import Routes from './routes'
import registerServiceWorker from './registerServiceWorker'


// Create stores for everywhere in the application, with redux logs enabled
const store = createStore(allReducers, applyMiddleware(logger))

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root'),
)

registerServiceWorker()
