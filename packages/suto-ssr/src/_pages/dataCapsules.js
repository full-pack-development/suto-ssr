/** Second section assets */
import firstMinimalLeft from './assets/sectionTwo/firstMinimalLeft.jpg'
import firstMinimalMid from './assets/sectionTwo/firstMinimalMid.jpg'
import firstMinimalRight from './assets/sectionTwo/firstMinimalRight.jpg'
import secondClassicLeft from './assets/sectionTwo/secondClassicLeft.jpg'
import secondClassicMid from './assets/sectionTwo/secondClassicMid.jpg'
import secondClassicRight from './assets/sectionTwo/secondClassicRight.jpg'

export const dataCapsules = [
  {
    id: 'capsuleFirst',
    color: '#b79f91',
    images: [
      {
        id: 'capsuleFirstImageOne',
        src: firstMinimalLeft,
      },
      {
        id: 'capsuleFirstImageTwo',
        src: firstMinimalMid,
      },
      {
        id: 'capsuleFirstImageThree',
        src: firstMinimalRight,
      },
      {
        id: 'capsuleFirstImageFour',
        src: secondClassicLeft,
      },
    ],
    titleFirst: 'Minimalistic',
    titleSecond: 'Look',
    subTitle: 'від 400 $/м²',
    button: 'Докладніше',
  },
  {
    id: 'capsuleSecond',
    color: '#8c94a7',
    images: [
      {
        id: 'capsuleSecondImageOne',
        src: secondClassicMid,
      },
      {
        id: 'capsuleSecondImageTwo',
        src: firstMinimalMid,
      },
      {
        id: 'capsuleSecondImageThree',
        src: secondClassicRight,
      },
      {
        id: 'capsuleSecondImageFour',
        src: secondClassicLeft,
      },
    ],
    titleFirst: 'Classic',
    titleSecond: 'Look',
    subTitle: 'від 500 $/м²',
    button: 'Докладніше',
  },
  {
    id: 'capsuleThird',
    color: '#878787',
    images: [
      {
        id: 'capsuleThirdImageOne',
        src: secondClassicMid,
      },
      {
        id: 'capsuleThirdImageTwo',
        src: firstMinimalMid,
      },
      {
        id: 'capsuleThirdImageThree',
        src: secondClassicRight,
      },
      {
        id: 'capsuleThirdImageFour',
        src: secondClassicLeft,
      },
    ],
    titleFirst: 'Loft',
    titleSecond: 'Look',
    subTitle: 'від 600 $/м²',
    button: 'Докладніше',
  },
]
