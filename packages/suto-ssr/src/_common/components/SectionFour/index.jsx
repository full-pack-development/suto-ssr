import React from 'react'
import classNames from 'classnames'

import { TextSection } from '../TextSection'
import { Button, BUTTON_PRIORITY, BUTTON_SIZE } from '../Button'

import styles from './styles.scss'

export const SectionFour = ({
  // required props

  // container props

  // optional props
}) => (
  <div className={styles.block}>
    <div className={styles.left}>
      <div className={classNames(styles.item, styles.top, styles.lightgray)}>
        <div className={styles.title}>
          Large
          <p className={styles.subtitle}>flat</p>
        </div>
        <div className={styles.section}>
          <img
            src="https://via.placeholder.com/755x540"
            alt=""
            className={styles.image}
          />
        </div>
      </div>
      <div className={classNames(styles.item, styles.bottom, styles.lightbrown)}>
        <div className={styles.title}>
          Smart
        </div>
        <div className={styles.section}>
          <img
            src="https://via.placeholder.com/755x540"
            alt=""
            className={styles.image}
          />
        </div>
      </div>
    </div>
    <div className={styles.right}>
      <TextSection
        reset
        title="Капсули  ідеальні для створення смартів"
        text="Капсули  надають широкі можливості для перетворення економічно обтяжливих великих квартир у компактні
          та прибуткові смарти, цілком готові для життя, продажу чи під здачу в оренду"
      />
      <Button
        priority={BUTTON_PRIORITY.REGULAR}
        size={BUTTON_SIZE.MD}
        className={styles.button}
      >
        дивитись смарти
      </Button>
    </div>
  </div>

)

export default SectionFour
