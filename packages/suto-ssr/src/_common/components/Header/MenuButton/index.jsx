import React from 'react'
import classNames from 'classnames'

import styles from './styles.scss'

const MenuButton = ({
  // required props
  onClick,
  isMenuOpened,
  // container props
  // optional props
}) => (
  <button
    type="button"
    onClick={onClick}
    className={styles.block}
  >
    <div className={classNames(
      styles.burger,
      {
        [styles.isMenuOpened]: isMenuOpened,
      },
    )}
    >
      <span className={styles.inner} />
    </div>
  </button>
)

export default React.memo(MenuButton)
