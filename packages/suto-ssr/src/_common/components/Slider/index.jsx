import React from 'react'
import SlickSlider from 'react-slick/lib'

import './slider.scss'

export const SliderMarkup = ({
  // required props
  children,

  // container props

  // optional props
  ...props
}) => (
  <SlickSlider
    {...props}
  >
    {children}
  </SlickSlider>
)

export default SliderMarkup
