import React from 'react'
import classNames from 'classnames'

import styles from './styles.scss'

export const TextSection = ({
  // required props
  title,
  text,
  // container props

  // optional props
  reset = false,
}) => (
  <div className={classNames(styles.block, { [styles.reset]: reset })}>
    <p className={styles.title}>{title}</p>
    <p className={styles.text}>{text}</p>
  </div>
)

export default TextSection
