import React from 'react'

import { TextSection } from '../TextSection'

import styles from './styles.scss'

export const SectionSeven = ({
  // required props
  data,
  // container props

  // optional props
}) => (
  <div className={styles.block}>
    <div className={styles.image}>
      <div className={styles.ratio}>
        <div className={styles.section}>
          <img
            src={data.image}
            alt=""
            className={styles.image}
          />
        </div>
      </div>
    </div>
    <div className={styles.text}>
      <TextSection
        reset
        title={data.title}
        text={data.text}
      />
    </div>
  </div>
)

export default SectionSeven
