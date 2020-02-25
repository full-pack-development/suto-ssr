import React from 'react'

import { Button, BUTTON_PRIORITY, BUTTON_SIZE } from '../Button'

import styles from './styles.scss'

export const HeroSection = ({
  // required props

  // container props

  // optional props
}) => (
  <div className={styles.block}>
    <img
      src="https://via.placeholder.com/866x1080"
      alt=""
      className={styles.image}
    />
    <div className={styles.middle}>
      <div className={styles.top}>
        <p className={styles.title}>Готові інтер’єрні рішення</p>
        <span className={styles.subtitle}>для життя та бізнесу</span>
      </div>
      <div className={styles.bottom}>
        <img
          src="https://via.placeholder.com/610x390"
          alt=""
          className={styles.image}
        />
      </div>
    </div>
    <div className={styles.right}>
      <div className={styles.top}>
        <img
          src="https://via.placeholder.com/450x690"
          alt=""
          className={styles.image}
        />
      </div>
      <div className={styles.bottom}>
        <p className={styles.text}>від 300 $/м²</p>
        <Button
          size={BUTTON_SIZE.MD}
          priority={BUTTON_PRIORITY.REGULAR}
          className={styles.button}
        >
          Докладніше
        </Button>
      </div>
    </div>
  </div>
)

export default HeroSection
