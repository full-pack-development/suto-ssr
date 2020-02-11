import React from 'react'
// import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './styles.scss'

export const Button = ({
  // required props

  // container props

  // optional props
  children,
  size,
  type = 'button',
}) => (
  <button // eslint-disable-line
    type={type}
    className={classNames(
      styles.block,
      styles[size],
    )}
  >
    {children}
  </button>

)

Button.propTypes = {
  // required props

  // container props

  // optional props
}

Button.defaultProps = {
  // optional props
}

export default Button
