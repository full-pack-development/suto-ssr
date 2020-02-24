import React from 'react'

import { Wrapper } from '../Wrapper'
import { Logo } from '../Logo'
import { Language } from '../Language'
import { MainMenu } from '../MainMenu'
import { Socials } from '../Socials'

import styles from './styles.scss'

export const Header = ({
  // required props

  // container props

  // optional props
}) => (
  <header className={styles.block}>
    <Wrapper>
      <div className={styles.content}>
        <button
          type="button"
          className={styles.burger}
        >
          <span className={styles.burgerInner} />
        </button>
        <a
          href="#"
          className={styles.logo}
        >
          <Logo />
        </a>
        <div className={styles.mobile}>
          <MainMenu />
          <Socials />
        </div>
        <Language />
      </div>
    </Wrapper>
  </header>
)

export default Header
