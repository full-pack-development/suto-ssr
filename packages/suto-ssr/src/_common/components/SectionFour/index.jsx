import React from 'react'
import classNames from 'classnames'
import { useTranslation } from '_common/LocaleProvider/useTranslation'

import { TextSection } from '../TextSection'
import { Button, BUTTON_PRIORITY, BUTTON_SIZE } from '../Button'

import styles from './styles.scss'

export const SectionFour = ({
  // required props
  data,
  // container props

  // optional props
}) => {
  const t = useTranslation()
  return (
    <div className={styles.block}>
      <div>
        <div className={classNames(styles.item, styles.lightgray)}>
          <div className={styles.title}>
            {t('sectionFourth.titles.top.title')}
            <p className={styles.subtitle}>{t('sectionFourth.titles.top.subTitle')}</p>
          </div>
          <div className={styles.section}>
            <img
              src={data.images.first}
              alt=""
              className={styles.image}
            />
          </div>
        </div>
        <div className={classNames(styles.item, styles.bottom, styles.lightbrown)}>
          <div className={styles.title}>
            {t('sectionFourth.titles.bottom.title')}
          </div>
          <div className={styles.section}>
            <img
              src={data.images.second}
              alt=""
              className={styles.image}
            />
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <TextSection
          reset
          title={t('sectionFourth.text.title')}
          text={t('sectionFourth.text.info')}
        />
        <Button
          priority={BUTTON_PRIORITY.REGULAR}
          size={BUTTON_SIZE.MD}
          className={styles.button}
        >
          {t('sectionFourth.text.button')}
        </Button>
      </div>
    </div>

  )
}

export default SectionFour
