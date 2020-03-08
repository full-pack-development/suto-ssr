import React from 'react'
import classNames from 'classnames'
import NavLink from '_common/components/NavLink/NavLink'
import { useTranslation } from '_common/LocaleProvider/useTranslation'

import styles from './styles.scss'

const menuItems = [
  '',
  'options',
  'about',
  'contacts',
]

export const MainMenu = ({
  // required props

  // container props

  // optional props
  dark,
  isAdaptive,
}) => {
  const t = useTranslation()
  return (
    <nav className={classNames(
      styles.block,
      {
        [styles.darken]: dark,
        [styles.isAdaptive]: isAdaptive,
      },
    )}
    >
      {menuItems.map((item) => (
        <NavLink
          href={`/${item}`}
          className={styles.item}
          activeClassName={styles.isActive}
        >
          {t(`header.menu.${item || 'main'}`)}
        </NavLink>
      ))}
    </nav>
  )
}

export default MainMenu
