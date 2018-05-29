import React from "react"
import { render } from "react-dom"
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import rootReducer from "./reducers"
import { Provider } from "react-redux"
import App from "./containers/App"

import "./styles/reset.css"
import "./styles/fonts.css"

const store = createStore(rootReducer, applyMiddleware(thunk))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
