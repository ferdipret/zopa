import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { Provider } from 'react-redux'
import App from './containers/App'

import './reset.css'
import './fonts.css'

render(<App />, document.getElementById('root'))
