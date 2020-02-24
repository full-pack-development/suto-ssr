import React from 'react'

import { Wrapper } from '../Wrapper'
import { Logo } from '../Logo'
import { MainMenu } from '../MainMenu'
import { Language } from '../Language'
import { SubscribeForm } from '../SubscribeForm'
import { Socials } from '../Socials'

import styles from './styles.scss'

export const Footer = ({
  // required props

  // container props

  // optional props
}) => (
  <footer className={styles.block}>
    <div className={styles.top}>
      <Wrapper>
        <div className={styles.grid}>
          <div className={styles.info}>
            <address className={styles.navigation}>м. Київ,вул. Паркова, 15</address>
            <a
              href="tel:0932029709"
              className={styles.navigation}
            >
              0932029709
            </a>
            <a
              href="mailto:kitcapsule@gmail.com"
              className={styles.navigation}
            >
              kitcapsule@gmail.com
            </a>
          </div>
          <div className={styles.subscribe}>
            <p>Отримайте  кешбек 3% на всі послуги kit</p>
            <SubscribeForm small />
          </div>
          <div className={styles.socials}>
            <p className={styles.socialTitle}>Follow us</p>
            <Socials rounded />
          </div>
          <div className={styles.logo}>
            <a
              href="#"
              className={styles.link}
            >
              <Logo />
            </a>
            <span className={styles.logoTitle}>Нова ера інтер’єротворення</span>
          </div>
        </div>
      </Wrapper>
    </div>
    <div className={styles.bottom}>
      <Wrapper>
        <div className={styles.footerBottom}>
          <div className={styles.left}>
            <MainMenu dark />
            <Language dark />
          </div>
          <div className={styles.copyright}>
            Copyright 2020 ©
            <span>Created by Light Art Design</span>
          </div>
        </div>
      </Wrapper>
    </div>
  </footer>
)

export default Footer
