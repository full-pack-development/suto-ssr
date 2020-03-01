import React from 'react'
import classNames from 'classnames'

import { TextSection } from '../TextSection'
import { Button, BUTTON_PRIORITY, BUTTON_SIZE } from '../Button'

import styles from './styles.scss'

export const SectionFour = ({
  // required props
  data,
  // container props

  // optional props
}) => (
  <div className={styles.block}>
    <div>
      <div className={classNames(styles.item, styles.lightgray)}>
        <div className={styles.title}>
          {data.titles.first.title}
          <p className={styles.subtitle}>{data.titles.first.subTitle}</p>
        </div>
        <div className={styles.section}>
          <img
            src={data.images.first}
            alt=""
            className={styles.image}
          />
        </div>
      </div>
      <div className={classNames(styles.item, styles.bottom, styles.lightbrown)}>
        <div className={styles.title}>
          {data.titles.second.title}
        </div>
        <div className={styles.section}>
          <img
            src={data.images.second}
            alt=""
            className={styles.image}
          />
        </div>
      </div>
    </div>
    <div className={styles.right}>
      <TextSection
        reset
        title={data.text.title}
        text={data.text.info}
      />
      <Button
        priority={BUTTON_PRIORITY.REGULAR}
        size={BUTTON_SIZE.MD}
        className={styles.button}
      >
        {data.text.button}
      </Button>
    </div>
  </div>

)

export default SectionFour
