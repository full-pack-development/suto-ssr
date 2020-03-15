import React from 'react'
import classNames from 'classnames'

import { Button, BUTTON_PRIORITY, BUTTON_SIZE } from '../Button'

import styles from './styles.scss'

export const SectionFive = ({
  // required props
  data,
  // container props

  // optional props
}) => (
  <div className={styles.grid}>
    <div className={styles.decor}>
      <div className={styles.content}>
        <div className={classNames(styles.column, styles.left)}>
          <div className={styles.title}>{data.columns[0].title}</div>
          <div className={styles.subtitle}>{data.columns[0].subtitle}</div>
          <div className={styles.text}>
            {data.columns[0].textFirst}
            <br />
            {' '}
            {data.columns[0].textSecond}
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.title}>{data.columns[1].title}</div>
          <div className={styles.subtitle}>{data.columns[1].subtitle}</div>
          <div className={styles.text}>
            {data.columns[1].textFirst}
            <br />
            {' '}
            {data.columns[1].textSecond}
          </div>
          <ul className={styles.list}>
            {data.columns[1].list.map((item) => (
              <li
                key={item}
                className={styles.item}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.button}>
        <Button
          priority={BUTTON_PRIORITY.REGULAR}
          size={BUTTON_SIZE.MD}
          href={data.button.href}
        >
          {data.button.text}
        </Button>
      </div>
    </div>
    <div>
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
  </div>
)

export default SectionFive
