import React from 'react'
// import PropTypes from 'prop-types'
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
}) => (
  <div>
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

Language.propTypes = {
  // required props

  // container props

  // optional props
}

Language.defaultProps = {
  // optional props
}

export default Language
