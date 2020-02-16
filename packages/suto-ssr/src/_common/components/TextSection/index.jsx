import React from 'react'

import { Wrapper } from '../Wrapper'

import styles from './styles.scss'

export const TextSection = ({
  // required props
  title,
  text,
  // container props

  // optional props
}) => (
  <Wrapper>
    <div className={styles.block}>
      <p className={styles.title}>{title}</p>
      <p className={styles.text}>{text}</p>
    </div>
  </Wrapper>

)

export default TextSection
