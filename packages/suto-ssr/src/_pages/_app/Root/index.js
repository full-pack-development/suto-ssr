import React from 'react'
// TODO: replace with saga
import { Provider } from 'react-redux'
import { Header } from '_common/components/Header'
import { Footer } from '_common/components/Footer'
import ModalsProvider from '_common/ModalsProvider/ModalsProvider'
import LocaleProvider from '_common/LocaleProvider/LocaleProvider'
import '_common/styles/base.scss'
import initialMessagesUk from 'locale/uk.json'
import { useIsMobile } from '_common/hooks/useIsMobile'

import { SEOHead } from './SEOHead/SEOHead'
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
    <LocaleProvider
      initialLocale={initialLocale}
      initialMessages={initialMessagesUk}
    >
      <SEOHead />

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
  )
}

export default React.memo(Root)
