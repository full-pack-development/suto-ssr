import React from 'react'
import classNames from 'classnames'

import styles from './styles.scss'

export const SectionTwo = ({
  // required props

  // container props

  // optional props
}) => (
  <div className={styles.block}>
    <div className={styles.ratio}>
      <div className={classNames(
        styles.section,
        styles.left,
      )}
      >
        <div className={styles.wrapper}>
          <p className={styles.title}>01</p>
          <div className={styles.under}>
            <div className={styles.subtitle}>
              Minimalistic
              <br />
              Look
            </div>
          </div>
        </div>
        <p className={styles.text}>від 400 $/м²</p>
      </div>
    </div>
    <div className={styles.ratio}>
      <div className={styles.section}>
        <img
          src="https://via.placeholder.com/490x2000"
          alt=""
          className={styles.image}
        />
      </div>
    </div>
    <div className={styles.ratio}>
      <div className={styles.section}>
        <img
          src="https://via.placeholder.com/490x2000"
          alt=""
          className={styles.image}
        />
      </div>
    </div>
    <div className={styles.ratio}>
      <div className={styles.section}>
        <img
          src="https://via.placeholder.com/490x2000"
          alt=""
          className={styles.image}
        />
      </div>
    </div>
    <div className={styles.tabs}>
      <div className={classNames(styles.item, styles.active)}>
        <span className={styles.digit}>01</span>
        minimalistic
      </div>
      <div className={styles.item}>
        <span className={styles.digit}>02</span>
        classic
      </div>
      <div className={styles.item}>
        <span className={styles.digit}>03</span>
        loft
      </div>
      <div className={styles.item}>
        <span className={styles.digit}>04</span>
        scandinavian
      </div>
    </div>
  </div>

)

export default SectionTwo
