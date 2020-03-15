import React from 'react'
import classNames from 'classnames'

import { SliderMarkup } from '../Slider'
import { SliderArrow } from '../SliderArrow'

import styles from './styles.scss'

export const SectionThree = ({
  // required props
  data,
  // container props

  // optional props
}) => (
  <SliderMarkup
    fade
    dots
    dotsClass={styles.tabs}
    nextArrow={(
      <SliderArrow
        side="right"
        color="black"
        classname={classNames(styles.arrows, styles.right)}
      />
      )}
    prevArrow={(
      <SliderArrow
        side="left"
        color="black"
        classname={classNames(styles.arrows, styles.left)}
      />
      )}
    customPaging={(index) => (
      <div className={styles.item}>
        {data[index].title}
      </div>
    )}
  >
    {data.map((section) => (
      <div key={section.id}>
        <div className={styles.block}>
          <div className={classNames(styles.ratio, styles.main)}>
            <div className={styles.section}>
              <img
                src={section.firstImage}
                alt=""
                className={styles.image}
              />
            </div>
          </div>
          <div className={styles.ratio}>
            <div className={classNames(styles.section, styles.gray)} />
          </div>
          <div className={classNames(styles.ratio, styles.controls)}>
            <div className={classNames(styles.section, styles.brown)} />
          </div>
          <div className={styles.ratio}>
            <div className={styles.section}>
              <img
                src={section.secondImage}
                alt=""
                className={styles.image}
              />
            </div>
          </div>
          <div className={classNames(styles.ratio, styles.horizontal, styles.left)}>
            <div className={styles.section}>
              <img
                src={section.thirdImage}
                alt=""
                className={styles.image}
              />
            </div>
          </div>
          <div className={classNames(styles.ratio, styles.horizontal, styles.right)}>
            <div className={styles.section}>
              <img
                src={section.fourthImage}
                alt=""
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    ))}
  </SliderMarkup>
)

export default SectionThree
