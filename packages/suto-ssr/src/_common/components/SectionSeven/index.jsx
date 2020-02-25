import React from 'react'

import { TextSection } from '../TextSection'

import styles from './styles.scss'

export const SectionSeven = ({
  // required props

  // container props

  // optional props
}) => (
  <div className={styles.block}>
    <div className={styles.image}>
      <div className={styles.ratio}>
        <div className={styles.section}>
          <img
            src="https://via.placeholder.com/1080x1080"
            alt=""
            className={styles.image}
          />
        </div>
      </div>
    </div>
    <div className={styles.text}>
      <TextSection
        reset
        title="Капсули “kit” гарантують дотримання строків та бездоганну якість"
        text="Використання в капсулах передових технологій  та професійних  матеріалів дозволяє
          економити  час ремонту та забезпечувати найкращий результат"
      />
    </div>
  </div>
)

export default SectionSeven
