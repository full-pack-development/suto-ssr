import React from 'react'
// import PropTypes from 'prop-types'
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
    <div className={classNames(
      styles.socials,
      {
        [styles.isRound]: rounded,
      },
    )}
    >
      {socials.map((social) => (
        <a
          href={social.href}
          key={social.type}
        >
          <img
            src={social.icon}
            alt="icon"
          />
        </a>
      ))}
    </div>
  </div>

)

Socials.propTypes = {
  // required props

  // container props

  // optional props
}

Socials.defaultProps = {
  // optional props
}

export default Socials
