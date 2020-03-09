import React from 'react'
import classNames from 'classnames'

import {
  Button, BUTTON_PRIORITY, BUTTON_SIZE, BUTTON_COLOR,
} from '../Button'

import styles from './styles.scss'

export const Capsule = ({
  // required props
  // TODO: think about how to fill array if images were low then 4
  images = [],
  index,
  titleFirst,
  titleSecond,
  subTitle,
  button,
  accent = '#b79f91',
  // container props

  // optional props
}) => (
  <div className={styles.block}>
    <div className={styles.grid}>
      {images.map((image) => (
        <div
          key={image.id}
          className={styles.item}
        >
          <img
            className={styles.image}
            src={image.src}
            alt="decor"
          />
        </div>
      ))}
    </div>
    <div className={classNames(styles.left, styles.content)}>
      <div className={styles.wrapper}>
        <div className={styles.digit}>{index}</div>
        <div className={styles.title}>
          <p>{titleFirst}</p>
          <p>{titleSecond}</p>
        </div>
      </div>

    </div>
    <div
      style={{ backgroundColor: accent }}
      className={classNames(styles.right, styles.content)}
    >
      <div className={styles.text}>
        <p className={styles.subTitle}>{subTitle}</p>
        <Button
          size={BUTTON_SIZE.MD}
          color={BUTTON_COLOR.OPACITY_HALF}
          priority={BUTTON_PRIORITY.REGULAR}
          className={styles.button}
        >
          {button}
        </Button>
      </div>
    </div>
  </div>

)

export default Capsule
