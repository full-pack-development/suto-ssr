import React from 'react'
import classNames from 'classnames'

import { Button } from '../Button'

import styles from './styles.scss'

export const SubscribeForm = ({
  // optional props
  small,
}) => (
  <form
    action=""
    className={classNames(styles.block, { [styles.small]: small })}
  >
    <input
      type="email"
      placeholder="Введіть електронну адресу"
      className={styles.input}
    />
    <Button
      className={styles.button}
      type="submit"
    >
      підписатись
    </Button>
  </form>

)

export default SubscribeForm
