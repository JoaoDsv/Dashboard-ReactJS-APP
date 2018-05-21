import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import ReactDOM from 'react-dom'
import React from 'react'

import App from './App'
import './build/styles/master.css'
import allReducers from './reducers'
import registerServiceWorker from './registerServiceWorker'


// Create stores for everywhere in the application, with redux logs enabled
const store = createStore(allReducers, applyMiddleware(logger))

// Render basics of the application
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)

registerServiceWorker()
