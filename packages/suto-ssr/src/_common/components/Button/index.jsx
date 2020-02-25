import React from 'react'
import classNames from 'classnames'

import styles from './styles.scss'

export const BUTTON_SIZE = {
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
  FLUID: 'fluid',
}

export const BUTTON_PRIORITY = {
  REGULAR: 'regular',
}

export const Button = ({
  // required props

  // container props

  // optional props
  children,
  size,
  priority,
  type = 'button',
  href,
  className,
  ...props
}) => {
  const buttonStyles = (
    classNames(
      styles.block,
      styles[size],
      styles[priority],
      className,
    )
  )
  return (
    <>
      {href && (
        <a
          href={href}
          className={buttonStyles}
          {...props}
        >
          {children}
        </a>
      )}
      {!href && (
        <button // eslint-disable-line
          type={type}
          className={buttonStyles}
          {...props}
        >
          {children}
        </button>
      )}
    </>
  )
}

export default Button
