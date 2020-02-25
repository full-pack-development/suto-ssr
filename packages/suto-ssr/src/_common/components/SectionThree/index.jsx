import React from 'react'
import classNames from 'classnames'

import styles from './styles.scss'

export const SectionThree = ({
  // required props

  // container props

  // optional props
}) => (
  <div className={styles.block}>
    <div className={styles.ratio}>
      <div className={styles.section}>
        <img
          src="https://via.placeholder.com/465x540"
          alt=""
          className={styles.image}
        />
      </div>
    </div>
    <div className={styles.ratio}>
      <div className={classNames(styles.section, styles.gray)} />
    </div>
    <div className={styles.ratio}>
      <div className={classNames(styles.section, styles.brown)}>
        <div className={styles.tabs}>
          <div className={styles.item}>кухня</div>
          <div className={classNames(styles.item, styles.active)}>вітальня</div>
          <div className={styles.item}>спальня</div>
          <div className={styles.item}>ванна кімната</div>
        </div>
      </div>
    </div>
    <div className={styles.ratio}>
      <div className={styles.section}>
        <img
          src="https://via.placeholder.com/465x540"
          alt=""
          className={styles.image}
        />
      </div>
    </div>
    <div className={classNames(styles.ratio, styles.horizontal, styles.left)}>
      <div className={styles.section}>
        <img
          src="https://via.placeholder.com/960x540"
          alt=""
          className={styles.image}
        />
      </div>
    </div>
    <div className={classNames(styles.ratio, styles.horizontal, styles.right)}>
      <div className={styles.section}>
        <img
          src="https://via.placeholder.com/960x540"
          alt=""
          className={styles.image}
        />
      </div>
    </div>
  </div>

)

export default SectionThree
