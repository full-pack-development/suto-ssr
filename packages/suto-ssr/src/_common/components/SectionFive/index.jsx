import React from 'react'
import classNames from 'classnames'

import { Button, BUTTON_PRIORITY, BUTTON_SIZE } from '../Button'

import styles from './styles.scss'

export const SectionFive = ({
  // required props

  // container props

  // optional props
}) => (
  <div className={styles.block}>
    <div className={styles.left}>
      <div className={styles.block}>
        <div className={classNames(styles.column, styles.left)}>
          <div className={styles.title}>від 300 $/м²</div>
          <div className={styles.subtitle}>дизайнерський ремонт</div>
          <div className={styles.text}>
            з матеріалами та
            <br />
            {' '}
            обладнанням включно
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.title}>від 450 $/м²</div>
          <div className={styles.subtitle}>дизайнерський ремонт</div>
          <div className={styles.text}>
            з матеріалами та
            <br />
            {' '}
            обладнанням включно
          </div>
          <ul className={styles.list}>
            <li className={styles.item}>меблі</li>
            <li className={styles.item}>текстиль</li>
            <li className={styles.item}>декор</li>
          </ul>
        </div>
      </div>
      <div className={styles.button}>
        <Button
          priority={BUTTON_PRIORITY.REGULAR}
          size={BUTTON_SIZE.MD}
        >
          детальніше про ціни
        </Button>
      </div>
    </div>
    <div className={styles.right}>
      <div className={styles.ratio}>
        <div className={styles.section}>
          <img
            src="https://via.placeholder.com/960x1080"
            alt=""
            className={styles.image}
          />
        </div>
      </div>
    </div>
  </div>
)

export default SectionFive
