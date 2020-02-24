import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
// TODO: replace with saga
import thunk from 'redux-thunk'
import Head from 'next/head'
import App from 'next/app'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import withRedux from 'next-redux-wrapper'

import { Header } from '../../_common/components/Header'
import { TextSection } from '../../_common/components/TextSection'
import { SectionTwo } from '../../_common/components/SectionTwo'
import { SectionThree } from '../../_common/components/SectionThree'
import { SectionFour } from '../../_common/components/SectionFour'
import { SectionFive } from '../../_common/components/SectionFive'
import { SectionSix } from '../../_common/components/SectionSix'
import { SectionSeven } from '../../_common/components/SectionSeven'
import { Brands } from '../../_common/components/Brands'
import { SectionSubscribe } from '../../_common/components/SectionSubscribe'
import { Footer } from '../../_common/components/Footer'
import { HeroSection } from '../../_common/components/HeroSection'
import { Wrapper } from '../../_common/components/Wrapper'
import { CANT_STRINGIFY, safeStringify } from '../../_common/_helpers/safeStringify'
import ModalsProvider from '../../_common/ModalsProvider/ModalsProvider'
import LocaleProvider from '../../_common/LocaleProvider/LocaleProvider'
import '../../_common/styles/base.scss'
import rootReducer from '../../store/rootReducer'

import styles from './styles.scss'

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
          <link
            href="https://fonts.googleapis.com/css?family=Playfair+Display|Ubuntu&display=swap"
            rel="stylesheet"
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
              <div className={styles.block}>
                <Header />
                <main className={styles.main}>
                  <HeroSection />
                  <Wrapper>
                    <TextSection
                      title="Капсули - це завершені інтер’єрні композиції"
                      text="Над кожною з них працюють  професійні  дизайнери, щоб втілити різноманіття стилістичних
                        концепцій: від  практичного мінімалізму до  елегантної  класики, від  брутального лофт до
                        затишного скандинавського хьюге"
                    />
                  </Wrapper>
                  <SectionTwo />
                  <Wrapper>
                    <TextSection
                      title="Естетично бездоганні  та функціональні "
                      text="В капсулах немає  випадкових деталей, все відповідає цілісному образу концепції та її
                        призначенню Естетика в  поєднанні з найвищими технічними стандартами"
                    />
                  </Wrapper>
                  <SectionThree />
                  <Wrapper>
                    <TextSection
                      title="Капсули “kit” підходять для квартир будь-якого розміру"
                      text="Вони сконструйовані таким чином, що однаково  легко  масштабуються на маленькі  та  великі
                        квартири З габаритних квартир робимо смарти"
                    />
                  </Wrapper>
                  <SectionFour />
                  <Wrapper>
                    <TextSection
                      title="Фіксована  ціна на кожну капсулу"
                      text="Ви цілком застраховані від додаткових витрат, адже сплачуєте лише вартість обраної капсули.
                        Меблі, текстиль, декорування може бути включено в капсулу за вашим бажанням"
                    />
                  </Wrapper>
                  <SectionFive />
                  <Wrapper>
                    <TextSection
                      title="Зручні можливості виконання"
                      text="Ми створили різні цінові пропозиції інтер’єрних капсул:
                        від раціонального Kit  Standart до максимального  - Kit Full"
                    />
                  </Wrapper>
                  <SectionSix />
                  <div className={styles.spacer} />
                  <SectionSeven />
                  <Brands />
                  <SectionSubscribe />
                  <Wrapper>
                    <p className={styles.decor}>Живіть у звичному ритмі. Все інше зробимо ми.</p>
                  </Wrapper>

                  {/* TODO PLZ help with this staff */}
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
}

export default withRedux(makeStore)(MyApp)
