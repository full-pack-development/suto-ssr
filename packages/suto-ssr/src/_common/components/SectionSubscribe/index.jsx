import React from 'react'

import { TextSection } from '../TextSection'
import { SubscribeForm } from '../SubscribeForm'

import styles from './styles.scss'

export const SectionSubscribe = ({
  // required props
  data,
  // container props

  // optional props
}) => (
  <div className={styles.block}>
    <div className={styles.wrapper}>
      <TextSection
        reset
        title={data.title}
        text={data.text}
      />
    </div>
    <div className={styles.form}>
      <SubscribeForm />
    </div>
  </div>

)

export default SectionSubscribe
