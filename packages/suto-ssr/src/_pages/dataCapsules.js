/** Second section assets */
import classicFirst from './assets/capsules/Classic/ClassicOne.jpg'
import classicTwo from './assets/capsules/Classic/ClassicTwo.jpg'
import classicThree from './assets/capsules/Classic/ClassicThree.jpg'
import classicFour from './assets/capsules/Classic/ClassicFour.jpg'
import loftOne from './assets/capsules/Loft/LoftOne.jpg'
import loftTwo from './assets/capsules/Loft/LoftTwo.jpg'
import loftThree from './assets/capsules/Loft/LoftThree.jpg'
import loftFour from './assets/capsules/Loft/LoftFour.jpg'
import minimalOne from './assets/capsules/Minimal/MinimalOne.jpeg'
import minimalTwo from './assets/capsules/Minimal/MinimalTwo.jpeg'
import minimalThree from './assets/capsules/Minimal/MinimalThree.jpeg'
import minimalFour from './assets/capsules/Minimal/MinimalFour.jpg'
import scandiOne from './assets/capsules/Scandi/ScandiOne.jpg'
import scandiTwo from './assets/capsules/Scandi/ScandiTwo.jpg'
import scandiThree from './assets/capsules/Scandi/ScandiThree.jpg'
import scandiFour from './assets/capsules/Scandi/ScandiFour.jpg'

export const dataCapsules = [
  {
    id: 'capsuleFirst',
    color: '#b79f91',
    images: [
      {
        id: 'capsuleFirstImageOne',
        src: minimalOne,
      },
      {
        id: 'capsuleFirstImageTwo',
        src: minimalTwo,
      },
      {
        id: 'capsuleFirstImageThree',
        src: minimalThree,
      },
      {
        id: 'capsuleFirstImageFour',
        src: minimalFour,
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
        src: loftOne,
      },
      {
        id: 'capsuleSecondImageTwo',
        src: loftTwo,
      },
      {
        id: 'capsuleSecondImageThree',
        src: loftThree,
      },
      {
        id: 'capsuleSecondImageFour',
        src: loftFour,
      },
    ],
    titleFirst: 'Loft',
    titleSecond: 'Look',
    subTitle: 'від 500 $/м²',
    button: 'Докладніше',
  },
  {
    id: 'capsuleThird',
    color: '#878787',
    images: [
      {
        id: 'capsuleFirstImageOne',
        src: classicFirst,
      },
      {
        id: 'capsuleFirstImageTwo',
        src: classicTwo,
      },
      {
        id: 'capsuleFirstImageThree',
        src: classicThree,
      },
      {
        id: 'capsuleFirstImageFour',
        src: classicFour,
      },
    ],
    titleFirst: 'Classic',
    titleSecond: 'Look',
    subTitle: 'від 600 $/м²',
    button: 'Докладніше',
  },
  {
    id: 'capsuleFourth',
    color: '#8c94a7',
    images: [
      {
        id: 'capsuleFirstImageOne',
        src: scandiOne,
      },
      {
        id: 'capsuleFirstImageTwo',
        src: scandiTwo,
      },
      {
        id: 'capsuleFirstImageThree',
        src: scandiThree,
      },
      {
        id: 'capsuleFirstImageFour',
        src: scandiFour,
      },
    ],
    titleFirst: 'Scandi',
    titleSecond: 'Look',
    subTitle: 'від 800 $/м²',
    button: 'Докладніше',
  },
]
