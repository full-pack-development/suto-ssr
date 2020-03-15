import NavLink from '_common/components/NavLink/NavLink'
import React from 'react'
import classNames from 'classnames'

import styles from './styles.scss'

export const BUTTON_SIZE = {
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
}

export const BUTTON_PRIORITY = {
  REGULAR: 'regular',
}

export const BUTTON_COLOR = {
  OPACITY_HALF: 'opacityHalf',
}

export const Button = ({
  // required props

  // container props

  // optional props
  children,
  size,
  color,
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
      styles[color],
      styles[priority],
      className,
    )
  )
  return (
    <>
      {href && (
        <NavLink
          href={href}
          className={buttonStyles}
          {...props}
        >
          {children}
        </NavLink>
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
