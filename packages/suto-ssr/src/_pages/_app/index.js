import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import Head from 'next/head'
import App from 'next/app'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import withRedux from 'next-redux-wrapper'

import { CANT_STRINGIFY, safeStringify } from '../../_common/_helpers/safeStringify'
import ModalsProvider from '../../_common/ModalsProvider/ModalsProvider'
import LocaleProvider from '../../_common/LocaleProvider/LocaleProvider'
import '../../_common/styles/base.scss'
import rootReducer from '../../store/rootReducer'

import classes from './styles.scss'

const makeStore = (initialState) => createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)))

const modalInitialValues = {
  contactUs: false,
}
// ========== executed once on the client, maybe there is some better place for config
class MyApp extends App {
  static async getInitialProps({
    Component, ctx, router, store,
  }) {
    // TODO: think about normal solution
    const hasRuLang = ctx.asPath.split('/')[1] === 'ru'
    const initialLocale = hasRuLang ? 'ru' : (router.query.language || 'en')

    const pagePropsPromise = Component.getInitialProps ? Component.getInitialProps({
      ctx,
      router,
      store,
      initialLocale,
    }) : {}
    const [
      pageProps,
    ] = await Promise.all([
      pagePropsPromise,
    ])
    const stringifiedProps = safeStringify(pageProps)
    if (stringifiedProps.status === CANT_STRINGIFY) {
      console.warn('CIRCULAR DEPENDENCY IN PAGE PROPS', stringifiedProps.parsed)
    }
    return {
      pageProps: stringifiedProps.parsed,
      initialLocale,
      canonicalUrl: router.asPath.split('?')[0],
    }
  }

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
              <header>Header</header>
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
