import React from 'react'
// import PropTypes from 'prop-types'

import styles from './styles.scss'

export const HeroSection = ({
  // required props

  // container props

  // optional props
}) => (
  <div className={styles.block}>
    <div className={styles.left}>
      <img
        src="https://via.placeholder.com/866x1080"
        alt=""
        className={styles.image}
      />
    </div>
    <div className={styles.middle}>
      <div className={styles.top}>
        <h1 className={styles.title}>Готові інтер’єрні рішення</h1>
        <span>для життя та бізнесу</span>
      </div>
      <div className={styles.bottom}>
        <img
          src="https://via.placeholder.com/866x1080"
          alt=""
          className={styles.image}
        />
      </div>
    </div>
    <div className={styles.right}>
      <div className={styles.top}>
        <img
          src="https://via.placeholder.com/866x1080"
          alt=""
          className={styles.image}
        />
      </div>
      <div className={styles.bottom}>
        <p className={styles.subtitle}>від 300 $/м²</p>
        <button
          type="button"
          className={styles.button}
        >
          Докладніше
        </button>
        <span>для життя та бізнесу</span>
      </div>
    </div>
  </div>
)

HeroSection.propTypes = {
  // required props

  // container props

  // optional props
}

HeroSection.defaultProps = {
  // optional props
}

export default HeroSection
