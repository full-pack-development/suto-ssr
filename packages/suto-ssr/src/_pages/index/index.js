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
import { dataSections } from '../dataSections'
import { textSections } from '../textSections'

import styles from './styles.scss'

const MainPage = ({
  // initialNewspapersAboutEvents,
  // initialNewspapers,
}) => (
  <>
    <HeroSection data={dataSections.heroSection} />
    <Wrapper>
      <TextSection
        title={textSections.textSectionFirst.title}
        text={textSections.textSectionFirst.text}
      />
    </Wrapper>
    <SectionTwo data={dataSections.sectionTwo} />
    <Wrapper>
      <TextSection
        title={textSections.textSectionSecond.title}
        text={textSections.textSectionSecond.text}
      />
    </Wrapper>
    <SectionThree data={dataSections.sectionThree} />
    <Wrapper>
      <TextSection
        title={textSections.textSectionThird.title}
        text={textSections.textSectionThird.text}
      />
    </Wrapper>
    <SectionFour data={dataSections.sectionFourth} />
    <Wrapper>
      <TextSection
        title={textSections.textSectionFourth.title}
        text={textSections.textSectionFourth.text}
      />
    </Wrapper>
    <SectionFive data={textSections.sectionFive} />
    <Wrapper>
      <TextSection
        title={textSections.textSectionFive.title}
        text={textSections.textSectionFive.text}
      />
    </Wrapper>
    <SectionSix data={dataSections.sectionSix} />
    <div className={styles.spacer} />
    <SectionSeven data={textSections.sectionSeven} />
    <Brands data={textSections.brands} />
    <SectionSubscribe data={textSections.subscribe} />
    <Wrapper>
      <TextSection>
        <p className={styles.decor}>{textSections.textSectionSix.title}</p>
      </TextSection>
    </Wrapper>
  </>
)

export default MainPage
