import React from 'react'
import { Provider } from 'react-redux'
// TODO: replace with saga
import Head from 'next/head'
import { Header } from '_common/components/Header'
import { Footer } from '_common/components/Footer'
import ModalsProvider from '_common/ModalsProvider/ModalsProvider'
import LocaleProvider from '_common/LocaleProvider/LocaleProvider'
import '_common/styles/base.scss'
import initialMessagesUk from 'locale/uk.json'
import { useIsMobile } from '_common/hooks/useIsMobile'

import styles from './styles.scss'

const modalInitialValues = {
  contactUs: false,
}
// ========== executed once on the client, maybe there is some better place for config
const Root = ({
  Component: Page,
  pageProps,
  store,
  initialLocale,
}) => {
  const isMobile = useIsMobile()
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="/static/favicon.ico"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Playfair+Display|Ubuntu&display=swap"
          rel="stylesheet"
        />
      </Head>
      <LocaleProvider
        initialLocale={initialLocale}
        initialMessages={initialMessagesUk}
      >
        <Provider store={store}>
          <ModalsProvider
            modalInitialValues={modalInitialValues}
          >
            <div className={styles.block}>
              <Header />
              {isMobile && console.log('I am mobile')}
              <main className={styles.main}>
                <Page
                  {...pageProps}
                />
              </main>
              <Footer />
            </div>
          </ModalsProvider>
        </Provider>
      </LocaleProvider>
    </>
  )
}

export default React.memo(Root)
