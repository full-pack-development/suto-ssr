import React from 'react'

import styles from './styles.scss'
/** Assets */
import logo from './img/logo.png'

export const Logo = ({
  // required props

  // container props

  // optional props
}) => (
  <div className={styles.block}>
    <img
      src={logo}
      alt=""
      className={styles.logo}
    />
  </div>

)

export default Logo
