import React from 'react'
import classNames from 'classnames'

import styles from './styles.scss'

const mockDada = [
  {
    lang: 'UK',
    state: 'active',
  },
  {
    lang: 'EN',
    state: '',
  },
]

export const Language = ({
  // required props

  // container props

  // optional props
  dark,
}) => (
  <div className={classNames({ [styles.darken]: dark })}>
    {mockDada.map((item) => (
      <button
        key={item.lang}
        type="button"
        className={classNames(styles.item, { [styles.isActive]: item.state === 'active' })}
      >
        {item.lang}
      </button>
    ))}
  </div>

)

export default Language
