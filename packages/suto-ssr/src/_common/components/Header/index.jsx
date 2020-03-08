import React, { useState } from 'react'
import classNames from 'classnames'

import { Wrapper } from '../Wrapper'
import { Logo } from '../Logo'
// import { Language } from '../Language'
import { MainMenu } from '../MainMenu'
import { Socials } from '../Socials'

import MenuButton from './MenuButton'
import styles from './styles.scss'

export const Header = ({
  // required props

  // container props

  // optional props
}) => {
  const [isOpen, setOpen] = useState(false)

  const clickHandler = () => {
    setOpen(!isOpen)
  }

  return (
    <header className={styles.block}>
      <Wrapper>
        <div className={styles.content}>
          <div className={styles.burger}>
            <MenuButton
              onClick={clickHandler}
              isMenuOpened={isOpen}
            />
          </div>
          <a
            href="#"
            className={styles.logo}
          >
            <Logo />
          </a>
          <div className={classNames(styles.mobile, { [styles.isOpen]: isOpen })}>
            <MainMenu isAdaptive />
            <Socials />
          </div>
          {/* <Language /> */}
        </div>
      </Wrapper>
    </header>
  )
}

export default Header
