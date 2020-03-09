import React from 'react'
import { useTranslation } from '_common/LocaleProvider/useTranslation'

import { TextSection } from '../TextSection'
import { SubscribeForm } from '../SubscribeForm'

import styles from './styles.scss'

export const SectionSubscribe = ({
  // required props

  // container props

  // optional props
}) => {
  const t = useTranslation()
  return (
    <div className={styles.block}>
      <div className={styles.wrapper}>
        <TextSection
          reset
          title={t('subscribe.title')}
          text={t('subscribe.text')}
        />
      </div>
      <div className={styles.form}>
        <SubscribeForm />
      </div>
    </div>
  )
}

export default SectionSubscribe
