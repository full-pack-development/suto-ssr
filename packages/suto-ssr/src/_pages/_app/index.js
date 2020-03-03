import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
// TODO: replace with saga
import thunk from 'redux-thunk'
import Head from 'next/head'
import App from 'next/app'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import withRedux from 'next-redux-wrapper'

import ModalsProvider from '../../_common/ModalsProvider/ModalsProvider'
import LocaleProvider from '../../_common/LocaleProvider/LocaleProvider'
import '../../_common/styles/base.scss'
import rootReducer from '../../store/rootReducer'

import FacebookIcon from './facebook.svg?sprite'
import classes from './styles.scss'

const makeStore = (initialState) => createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)))

const modalInitialValues = {
  contactUs: false,
}
// ========== executed once on the client, maybe there is some better place for config
class MyApp extends App {
  render() {
    const {
      Component: Page,
      pageProps,
      store,
      initialLocale,
      initialMessages,
    } = this.props
    return (
      <>
        <Head>
          <link
            rel="shortcut icon"
            href="/static/favicon.ico"
          />
        </Head>
        <LocaleProvider
          initialLocale={initialLocale}
          initialMessages={initialMessages}
        >
          <Provider store={store}>
            <ModalsProvider
              modalInitialValues={modalInitialValues}
            >
              <header>
                <FacebookIcon />
              </header>
              <main className={classes.wrap}>
                Main
                <Page
                  {...pageProps}
                />
              </main>
              <footer>Footer</footer>
            </ModalsProvider>
          </Provider>
        </LocaleProvider>
      </>
    )
  }
}

export default withRedux(makeStore)(MyApp)
