import React from 'react'

import { TextSection } from '../../_common/components/TextSection'
import { SectionTwo } from '../../_common/components/SectionTwo'
import { SectionThree } from '../../_common/components/SectionThree'
import { SectionFour } from '../../_common/components/SectionFour'
import { SectionFive } from '../../_common/components/SectionFive'
import { SectionSix } from '../../_common/components/SectionSix'
import { SectionSeven } from '../../_common/components/SectionSeven'
import { Brands } from '../../_common/components/Brands'
import { SectionSubscribe } from '../../_common/components/SectionSubscribe'
import { HeroSection } from '../../_common/components/HeroSection'
import { Wrapper } from '../../_common/components/Wrapper'

import styles from './styles.scss'

const MainPage = ({
  // initialNewspapersAboutEvents,
  // initialNewspapers,
}) => (
  <div className={styles.wrapper}>
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
      <TextSection>
        <p className={styles.decor}>Живіть у звичному ритмі. Все інше зробимо ми.</p>
      </TextSection>
    </Wrapper>
  </div>
)

export default MainPage
