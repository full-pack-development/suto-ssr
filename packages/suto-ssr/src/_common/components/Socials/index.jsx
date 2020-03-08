import React from 'react'
import classNames from 'classnames'

import styles from './styles.scss'
/** Assets */
import fb from './img/facebook.svg'
import inst from './img/insta.svg'

const socials = [
  {
    href: '#',
    type: 'facebook',
    icon: fb,
  },
  {
    href: '#',
    type: 'instagram',
    icon: inst,
  },
]

export const Socials = ({
  // required props

  // container props

  // optional props
  rounded,
}) => (

  <div className={classNames(styles.block, {
    [styles.isRound]: rounded,
  })}
  >
    {socials.map((social) => (
      <a
        href={social.href}
        key={social.type}
        className={styles.item}
      >
        <img
          src={social.icon}
          alt="icon"
          className={styles.icon}
        />
      </a>
    ))}
  </div>
)

export default Socials
