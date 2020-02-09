import React from 'react'
// import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './styles.scss'

const menu = [
  {
    href: '#',
    text: 'ГОЛОВНА',
    state: 'active',
  },
  {
    href: '#',
    text: 'КАПСУЛИ',
    state: '',
  },
  {
    href: '#',
    text: 'ПРО KIT',
    state: '',
  },
  {
    href: '#',
    text: 'КОНТАКТИ',
    state: '',
  },
]

export const MainMenu = ({
  // required props

  // container props

  // optional props
}) => (
  <nav className={styles.block}>
    {menu.map((item) => (
      <a
        href={item.href}
        className={classNames(
          styles.item,
          {
            [styles.isActive]: item.state === 'active',
          },
        )}
      >
        {item.text}
      </a>
    ))}
  </nav>
)

MainMenu.propTypes = {
  // required props

  // container props

  // optional props
}

MainMenu.defaultProps = {
  // optional props
}

export default MainMenu
