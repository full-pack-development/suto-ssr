import React from 'react'
import Capsule from '_common/components/Capsule'
import Wrapper from '_common/components/Wrapper'
import TextSection from '_common/components/TextSection'
import SectionSeven from '_common/components/SectionSeven'
import Brands from '_common/components/Brands'
import SectionSubscribe from '_common/components/SectionSubscribe'
/** Helpers */
import { concatZeroToIndex } from '_common/_helpers/concatZeroToIndex'
import { useTranslation } from '_common/LocaleProvider/useTranslation'

import { textSections } from '../textSections'
import { dataCapsules } from '../dataCapsules'

const OptionsPage = ({
}) => {
  const t = useTranslation()
  return (
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
          title={t('textSectionFirst.title')}
          text={t('textSectionFirst.text')}
        />
      </Wrapper>
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

export default OptionsPage
