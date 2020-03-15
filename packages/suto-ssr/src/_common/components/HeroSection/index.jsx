import React from 'react'
import classNames from 'classnames'

import { Button, BUTTON_PRIORITY, BUTTON_SIZE } from '../Button'
import { SliderMarkup } from '../Slider'
import { SliderArrow } from '../SliderArrow'

import styles from './styles.scss'

export const HeroSection = ({
  // required props
  data,
  // container props

  // optional props
}) => (
  <SliderMarkup
    fade
    nextArrow={(
      <SliderArrow
        side="right"
        color="white"
        classname={classNames(styles.arrows, styles.right)}
      />
)}
    prevArrow={(
      <SliderArrow
        side="left"
        color="white"
        classname={classNames(styles.arrows, styles.left)}
      />
)}
  >
    {data.map((section) => (
      <div key={section.id}>
        <div className={styles.block}>
          <div className={styles.main}>
            <img
              src={section.leftImage}
              alt=""
              className={styles.image}
            />
          </div>
          <div className={styles.middle}>
            <div className={styles.top}>
              <p className={styles.title}>{section.title}</p>
              <span className={styles.subtitle}>{section.subTitle}</span>
            </div>
            <div className={classNames(styles.bottom, styles.mobile)}>
              <img
                src={section.midImage}
                alt=""
                className={styles.image}
              />
            </div>
          </div>
          <div className={styles.right}>
            <div className={classNames(styles.top, styles.mobile)}>
              <img
                src={section.rightImage}
                alt=""
                className={styles.image}
              />
            </div>
            <div className={styles.bottom}>
              <p className={styles.text}>{section.bottomTitle}</p>

              <Button
                size={BUTTON_SIZE.MD}
                priority={BUTTON_PRIORITY.REGULAR}
                className={styles.button}
                href={section.button.href}
              >
                {section.button.text}
              </Button>
            </div>
          </div>
        </div>
      </div>
    ))}
  </SliderMarkup>
)

export default HeroSection
