import React from 'react'
import Capsule from '_common/components/Capsule'
import Wrapper from '_common/components/Wrapper'
import TextSection from '_common/components/TextSection'
import SectionSeven from '_common/components/SectionSeven'
import Brands from '_common/components/Brands'
import SectionSubscribe from '_common/components/SectionSubscribe'
/** Helpers */
import { concatZeroToIndex } from '_common/_helpers/concatZeroToIndex'

import { textSections } from '../textSections'
import { dataCapsules } from '../dataCapsules'

const OptionsPage = ({
}) => (
  <>
    {dataCapsules.map((capsule, index) => (
      <Capsule
        key={capsule.id}
        accent={capsule.color}
        images={capsule.images}
        titleFirst={capsule.titleFirst}
        titleSecond={capsule.titleSecond}
        subTitle={capsule.subTitle}
        button={capsule.button}
        index={concatZeroToIndex(index)}
      />
    ))}
    <Wrapper>
      <TextSection
        title={textSections.textSectionFirst.title}
        text={textSections.textSectionFirst.text}
      />
    </Wrapper>
    <SectionSeven data={textSections.sectionSeven} />
    <Brands data={textSections.brands} />
    <SectionSubscribe data={textSections.subscribe} />
    <Wrapper>
      <TextSection
        italic
        title={textSections.textSectionSix.title}
      />
    </Wrapper>
  </>
)

export default OptionsPage
