import React from 'react'
import classNames from 'classnames'

import { SliderMarkup } from '../Slider'

import styles from './styles.scss'

export const SectionSix = ({
  // required props
  data,
  // container props

  // optional props
}) => (
  <SliderMarkup
    fade
    dots
    dotsClass={styles.tabs}
    customPaging={(index) => (
      <div className={styles.item}>
        {data[index].nav}
      </div>
    )}
  >
    {data.map((section) => (
      <div key={section.id}>
        <div className={styles.block}>
          <div className={styles.section}>
            <div className={styles.nav} />
          </div>
          <div className={styles.section}>
            <img
              src={section.firstImage}
              alt=""
              className={styles.image}
            />
          </div>
          <div className={styles.section}>
            <div className={styles.wrapper}>
              <div className={styles.decor} />
            </div>
          </div>
          <div className={classNames(styles.section, styles.main)}>
            <img
              src={section.secondImage}
              alt=""
              className={styles.image}
            />
          </div>
          <div className={styles.section}>
            <img
              src={section.thirdImage}
              alt=""
              className={styles.image}
            />
          </div>
          <div className={styles.section}>
            <img
              src={section.fourthImage}
              alt=""
              className={styles.image}
            />
          </div>
          <div className={classNames(styles.section, styles.mobTitle)}>
            <div className={styles.text}>
              <p className={styles.title}>{section.title}</p>
              <p>{section.subTitle}</p>
            </div>
          </div>
          <div className={styles.section}>
            <img
              src={section.fiveImage}
              alt=""
              className={styles.image}
            />
          </div>
        </div>
      </div>
    ))}
  </SliderMarkup>
)

export default SectionSix
