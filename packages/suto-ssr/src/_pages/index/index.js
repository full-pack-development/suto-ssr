import React from 'react'
import TextSection from '_common/components/TextSection'
import SectionTwo from '_common/components/SectionTwo'
import SectionThree from '_common/components/SectionThree'
import SectionFour from '_common/components/SectionFour'
import SectionFive from '_common/components/SectionFive'
import SectionSix from '_common/components/SectionSix'
import SectionSeven from '_common/components/SectionSeven'
import Brands from '_common/components/Brands'
import SectionSubscribe from '_common/components/SectionSubscribe'
import HeroSection from '_common/components/HeroSection'
import Wrapper from '_common/components/Wrapper'
import { useTranslation } from '_common/LocaleProvider/useTranslation'

import { dataSections } from '../dataSections'
import { textSections } from '../textSections'

import styles from './styles.scss'

const MainPage = ({
  // initialNewspapersAboutEvents,
  // initialNewspapers,
}) => {
  const t = useTranslation()
  return (
    <>
      <HeroSection data={dataSections.heroSection} />
      <Wrapper>
        <TextSection
          title={t('textSectionFirst.title')}
          text={t('textSectionFirst.text')}
        />
      </Wrapper>
      <SectionTwo data={dataSections.sectionTwo} />
      <Wrapper>
        <TextSection
          title={t('textSectionSecond.title')}
          text={t('textSectionSecond.text')}
        />
      </Wrapper>
      <SectionThree data={dataSections.sectionThree} />
      <Wrapper>
        <TextSection
          title={t('textSectionThird.title')}
          text={t('textSectionThird.text')}
        />
      </Wrapper>
      <SectionFour data={dataSections.sectionFourth} />
      <Wrapper>
        <TextSection
          title={t('textSectionFourth.title')}
          text={t('textSectionFourth.text')}
        />
      </Wrapper>
      <SectionFive data={textSections.sectionFive} />
      <Wrapper>
        <TextSection
          title={t('textSectionFive.title')}
          text={t('textSectionFive.text')}
        />
      </Wrapper>
      <SectionSix data={dataSections.sectionSix} />
      <div className={styles.spacer} />
      <SectionSeven image={textSections.sectionSeven.image} />
      <Brands data={textSections.brands} />
      <SectionSubscribe />
      <Wrapper>
        <TextSection
          italic
          title={t('textSectionSix.title')}
        />
      </Wrapper>
    </>
  )
}

export default MainPage
