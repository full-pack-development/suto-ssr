import React from 'react'
import classNames from 'classnames'

import styles from './styles.scss'

export const Wrapper = ({
  children,
  fluid = false,
}) => (
  <div className={classNames(styles.block, { [styles.fluid]: fluid })}>
    {children}
  </div>
)

export default Wrapper
