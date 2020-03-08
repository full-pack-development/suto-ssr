import React from 'react'
import classNames from 'classnames'
import NavLink from '_common/components/NavLink/NavLink'

import styles from './styles.scss'

const menu = [
  {
    href: '/',
    text: 'ГОЛОВНА',
  },
  {
    href: '/options',
    text: 'КАПСУЛИ',
  },
  {
    href: '/about',
    text: 'ПРО KIT',
  },
  {
    href: '/contacts',
    text: 'КОНТАКТИ',
  },
]

export const MainMenu = ({
  // required props

  // container props

  // optional props
  dark,
  isAdaptive,
}) => (
  <nav className={classNames(
    styles.block,
    {
      [styles.darken]: dark,
      [styles.isAdaptive]: isAdaptive,
    },
  )}
  >
    {menu.map((item) => (
      <NavLink
        href={item.href}
        className={styles.item}
        activeClassName={styles.isActive}
      >
        {item.text}
      </NavLink>
    ))}
  </nav>
)

export default MainMenu
