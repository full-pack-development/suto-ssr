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
  children,
}) => (
  <div className={classNames(styles.block, { [styles.reset]: reset })}>
    {title && (
      <p className={styles.title}>{title}</p>
    )}
    {text && (
      <p className={styles.text}>{text}</p>
    )}
    {children}
  </div>
)

export default TextSection
