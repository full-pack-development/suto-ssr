import Root from '_pages/_app/Root'
import React from 'react'
import { createStore, applyMiddleware } from 'redux'
// TODO: replace with saga
import thunk from 'redux-thunk'
import App from 'next/app'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import withRedux from 'next-redux-wrapper'
import '_common/styles/base.scss'
import rootReducer from 'store/rootReducer'

const makeStore = (initialState) => createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)))
// ========== executed once on the client, maybe there is some better place for config
class MyApp extends App {
  render() {
    const initialLocale = 'uk'
    return (
      <Root
        {...this.props}
        initialLocale={initialLocale}
      />
    )
  }
}

export default withRedux(makeStore)(MyApp)
