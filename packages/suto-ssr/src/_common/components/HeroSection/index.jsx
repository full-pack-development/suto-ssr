import React from 'react'
import classNames from 'classnames'

import { Button, BUTTON_PRIORITY, BUTTON_SIZE } from '../Button'
import { SliderMarkup } from '../Slider'
import { SliderArrow } from '../SliderArrow'

import styles from './styles.scss'

export const HeroSection = ({
  // required props

  // container props

  // optional props
}) => (
  <SliderMarkup
    // fade
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
    <div>
      <div className={styles.block}>
        <div className={styles.main}>
          <img
            src="https://via.placeholder.com/866x1080"
            alt=""
            className={styles.image}
          />
        </div>
        <div className={styles.middle}>
          <div className={styles.top}>
            <p className={styles.title}>Готові інтер’єрні рішення</p>
            <span className={styles.subtitle}>для життя та бізнесу</span>
          </div>
          <div className={classNames(styles.bottom, styles.mobile)}>
            <img
              src="https://via.placeholder.com/610x390"
              alt=""
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.right}>
          <div className={classNames(styles.top, styles.mobile)}>
            <img
              src="https://via.placeholder.com/450x690"
              alt=""
              className={styles.image}
            />
          </div>
          <div className={styles.bottom}>
            <p className={styles.text}>від 300 $/м²</p>
            <Button
              size={BUTTON_SIZE.MD}
              priority={BUTTON_PRIORITY.REGULAR}
              className={styles.button}
            >
              Докладніше
            </Button>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className={styles.block}>
        <div className={styles.main}>
          <img
            src="https://via.placeholder.com/866x1080"
            alt=""
            className={styles.image}
          />
        </div>
        <div className={styles.middle}>
          <div className={styles.top}>
            <p className={styles.title}>Готові інтер’єрні рішення</p>
            <span className={styles.subtitle}>для життя та бізнесу</span>
          </div>
          <div className={classNames(styles.bottom, styles.mobile)}>
            <img
              src="https://via.placeholder.com/610x390"
              alt=""
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.right}>
          <div className={classNames(styles.top, styles.mobile)}>
            <img
              src="https://via.placeholder.com/450x690"
              alt=""
              className={styles.image}
            />
          </div>
          <div className={styles.bottom}>
            <p className={styles.text}>від 300 $/м²</p>
            <Button
              size={BUTTON_SIZE.MD}
              priority={BUTTON_PRIORITY.REGULAR}
              className={styles.button}
            >
              Докладніше
            </Button>
          </div>
        </div>
      </div>
    </div>
  </SliderMarkup>
)

export default HeroSection
