import React from 'react'
import classNames from 'classnames'

import styles from './styles.scss'

export const SliderArrow = ({
  // required props

  // container props

  // optional props
  side,
  classname,
  onClick,
  color,
}) => (
  <button
    type="button"
    className={classNames(styles.block, styles[side], styles[color], classname)}
    onClick={onClick}
  >
    arrow
  </button>
)

export default SliderArrow
