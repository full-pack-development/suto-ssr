import React from 'react'
import classNames from 'classnames'

import styles from './styles.scss'

export const SectionSix = ({
  // required props

  // container props

  // optional props
}) => (
  <div className={styles.block}>
    <div className={styles.section}>
      <ul className={styles.tabs}>
        <li className={classNames(styles.item, styles.active)}>
          kit standart
        </li>
        <li className={styles.item}>
          kit select
        </li>
        <li className={styles.item}>
          kit green
        </li>
        <li className={styles.item}>
          kit full
        </li>
      </ul>
    </div>
    <div className={styles.section}>
      <img
        src="https://via.placeholder.com/600x600"
        alt=""
        className={styles.image}
      />
    </div>
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.decor} />
      </div>
    </div>
    <div className={styles.section}>
      <img
        src="https://via.placeholder.com/600x600"
        alt=""
        className={styles.image}
      />
    </div>
    <div className={styles.section}>
      <img
        src="https://via.placeholder.com/600x480"
        alt=""
        className={styles.image}
      />
    </div>
    <div className={styles.section}>
      <img
        src="https://via.placeholder.com/600x480"
        alt=""
        className={styles.image}
      />
    </div>
    <div className={styles.section}>
      <div className={styles.text}>
        <p className={styles.title}>Збалансований вибір</p>
        <p>Для тих, хто цінує якість та надає перевагу  гармонійному поєднанню естетики та функціональності.</p>
      </div>
    </div>
    <div className={styles.section}>
      <img
        src="https://via.placeholder.com/600x480"
        alt=""
        className={styles.image}
      />
    </div>
  </div>

)

export default SectionSix
