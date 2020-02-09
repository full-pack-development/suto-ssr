import React from 'react'
// import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './styles.scss'

export const Wrapper = ({
  children,
  fluid,
}) => (
  <div className={classNames(styles.block, { [styles.fluid]: fluid })}>
    {children}
  </div>

)

Wrapper.propTypes = {
  // required props
  // children: PropTypes.node.isRequired,
  // Wrapper props

  // optional props
  // fluid: PropTypes.bool,
}

Wrapper.defaultProps = {
  // optional props
  fluid: false,
}

export default Wrapper
