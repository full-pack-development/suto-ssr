import React from 'react'

import { TextSection } from '../TextSection'
import { SubscribeForm } from '../SubscribeForm'

import styles from './styles.scss'

export const SectionSubscribe = ({
  // required props

  // container props

  // optional props
}) => (
  <div className={styles.block}>
    <div className={styles.wrapper}>
      <TextSection
        reset
        title="Приєднуйтесь до нашої розсилки"
        text="Підпишіться на розсилку, щоб першими дізнаватися про нові капсули та акції від Kit і
          отримати 3% кешбеку за квадратний метр"
      />
    </div>
    <div className={styles.form}>
      <SubscribeForm />
    </div>
  </div>

)

export default SectionSubscribe
