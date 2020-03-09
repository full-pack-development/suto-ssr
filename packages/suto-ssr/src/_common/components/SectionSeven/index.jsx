import React from 'react'
import { useTranslation } from '_common/LocaleProvider/useTranslation'

import { TextSection } from '../TextSection'

import styles from './styles.scss'

export const SectionSeven = ({
  // required props
  image,
  // container props

  // optional props
}) => {
  const t = useTranslation()
  return (
    <div className={styles.block}>
      <div className={styles.image}>
        <div className={styles.ratio}>
          <div className={styles.section}>
            <img
              src={image}
              alt=""
              className={styles.image}
            />
          </div>
        </div>
      </div>
      <div className={styles.text}>
        <TextSection
          reset
          title={t('sectionSeven.title')}
          text={t('sectionSeven.text')}
        />
      </div>
    </div>
  )
}

export default SectionSeven
