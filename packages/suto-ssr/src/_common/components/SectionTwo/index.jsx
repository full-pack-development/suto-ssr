import React, { useState } from 'react'
import classNames from 'classnames'

import { SliderMarkup } from '../Slider'
import { SliderArrow } from '../SliderArrow'

import styles from './styles.scss'

const TEN = 10

export const SectionTwo = ({
  // required props
  data,
  // container props

  // optional props
}) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  return (
    <SliderMarkup
      fade
      dots
      dotsClass={styles.tabs}
      afterChange={(current) => setCurrentSlide(current)}
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
      customPaging={(index) => (
        <div className={classNames(styles.item, {
          [styles.active]: currentSlide === index,
        })}
        >
          <span className={styles.digit}>
            {index < TEN ? `0${index + 1}` : index + 1}
          </span>
          {data[index].title}
        </div>
      )}
    >
      {data.map((section, index) => (
        <div key={section.id}>
          <div className={styles.block}>
            <div className={styles.ratio}>
              <div className={classNames(
                styles.section,
                styles.left,
              )}
              >
                <div className={styles.wrapper}>
                  <p className={styles.title}>{index < TEN ? `0${index + 1}` : index + 1}</p>
                  <div className={styles.under}>
                    <div className={styles.subtitle}>
                      {section.subtitle.first}
                      <br />
                      {section.subtitle.second}
                    </div>
                  </div>
                </div>
                <p className={styles.text}>{section.text}</p>
              </div>
            </div>
            <div className={classNames(styles.ratio, styles.main)}>
              <div className={styles.section}>
                <img
                  src={section.firstImage}
                  alt=""
                  className={styles.image}
                />
              </div>
            </div>
            <div className={classNames(styles.ratio, styles.hiddenMobile)}>
              <div className={styles.section}>
                <img
                  src={section.secondImage}
                  alt=""
                  className={styles.image}
                />
              </div>
            </div>
            <div className={classNames(styles.ratio, styles.hiddenMobile)}>
              <div className={styles.section}>
                <img
                  src={section.thirdImage}
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
}

export default SectionTwo
