import React from 'react'
import classNames from 'classnames'

import styles from './styles.scss'

const socials = [
  {
    href: '#',
    type: 'facebook',
    icon: 'https://via.placeholder.com/20',
  },
  {
    href: '#',
    type: 'instagram',
    icon: 'https://via.placeholder.com/20',
  },
]

export const Socials = ({
  // required props

  // container props

  // optional props
  rounded,
}) => (

  <div className={styles.block}>
    {socials.map((social) => (
      <a
        href={social.href}
        key={social.type}
        className={classNames(
          styles.item,
          {
            [styles.isRound]: rounded,
          },
        )}
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
