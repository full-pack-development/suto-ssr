import React from 'react'

import { SliderMarkup } from '../Slider'
import { Wrapper } from '../Wrapper'

import styles from './styles.scss'

export const Brands = ({
  // required props
  data,
  // container props

  // optional props
}) => (
  <Wrapper>
    <SliderMarkup
      className={styles.block}
      slidesToShow={5}
      infinite
      responsive={[
        {
          breakpoint: 1279,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
          },
        },
      ]}
    >
      {data.map((item) => (
        <div key={item.id}>
          <img
            src={item.image}
            alt="logo"
            className={styles.image}
          />
        </div>
      ))}
    </SliderMarkup>
  </Wrapper>
)

export default Brands
