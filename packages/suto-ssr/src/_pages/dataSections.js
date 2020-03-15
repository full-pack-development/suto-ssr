/** Hero section assets */
import heroBg from './assets/hero/heroBg.jpg'
import fmid from './assets/hero/fmid.jpg'
import smid from './assets/hero/smid.jpg'
import fr from './assets/hero/fr.jpg'
import sr from './assets/hero/sr.jpg'
/** Second section assets */
import firstMinimalLeft from './assets/sectionTwo/firstMinimalLeft.jpg'
import firstMinimalMid from './assets/sectionTwo/firstMinimalMid.jpg'
import firstMinimalRight from './assets/sectionTwo/firstMinimalRight.jpg'
import secondClassicLeft from './assets/sectionTwo/secondClassicLeft.jpg'
import secondClassicMid from './assets/sectionTwo/secondClassicMid.jpg'
import secondClassicRight from './assets/sectionTwo/secondClassicRight.jpg'

export const dataSections = {
  heroSection: [
    {
      id: 'heroSectionFirst',
      leftImage: heroBg,
      title: 'Готові інтер’єрні рішення',
      subTitle: 'для життя та бізнесу',
      midImage: fmid,
      rightImage: fr,
      bottomTitle: 'від 300 $/м²',
      button: {
        text: 'Докладніше',
        href: '/prices?price=300',
      },
    },
    {
      id: 'heroSectionSecond',
      leftImage: heroBg,
      title: 'Готові інтер’єрні рішення',
      subTitle: 'класу люкс',
      midImage: smid,
      rightImage: sr,
      bottomTitle: 'від 1000 $/м²',
      button: {
        text: 'Докладніше',
        href: '/prices?price=1000',
      },
    },
  ],
  sectionTwo: [
    {
      id: 'sectionTwoFirst',
      subtitle: {
        first: 'Minimalistic',
        second: 'Look',
      },
      firstImage: firstMinimalLeft,
      secondImage: firstMinimalMid,
      thirdImage: firstMinimalRight,
      text: 'від 400 $/м²',
      title: 'minimalistic',
    },
    {
      id: 'sectionTwoSecond',
      subtitle: {
        first: 'classic',
        second: 'Look',
      },
      firstImage: secondClassicLeft,
      secondImage: secondClassicMid,
      thirdImage: secondClassicRight,
      text: 'від 500 $/м²',
      title: 'classic',
    },
    {
      id: 'sectionTwoThird',
      subtitle: {
        first: 'loft',
        second: 'Look',
      },
      firstImage: firstMinimalLeft,
      secondImage: firstMinimalRight,
      thirdImage: firstMinimalMid,
      text: 'від 600 $/м²',
      title: 'loft',
    },
    {
      id: 'sectionTwoFourth',
      subtitle: {
        first: 'scandinavian',
        second: 'Look',
      },
      firstImage: 'https://via.placeholder.com/490x2000',
      secondImage: 'https://via.placeholder.com/490x2000',
      thirdImage: 'https://via.placeholder.com/490x2000',
      text: 'від 700 $/м²',
      title: 'scandinavian',
    },
  ],
  sectionThree: [
    {
      id: 'sectionThreeFirst',
      firstImage: firstMinimalLeft,
      secondImage: firstMinimalRight,
      thirdImage: firstMinimalMid,
      fourthImage: smid,
      title: 'кухня',
    },
    {
      id: 'sectionThreeSecond',
      firstImage: fmid,
      secondImage: secondClassicLeft,
      thirdImage: secondClassicMid,
      fourthImage: secondClassicRight,
      title: 'вітальня',
    },
    {
      id: 'sectionThreeThird',
      firstImage: 'https://via.placeholder.com/465x540',
      secondImage: 'https://via.placeholder.com/465x540',
      thirdImage: 'https://via.placeholder.com/960x540',
      fourthImage: 'https://via.placeholder.com/960x540',
      title: 'спальня',
    },
    {
      id: 'sectionThreeFourth',
      firstImage: 'https://via.placeholder.com/465x540',
      secondImage: 'https://via.placeholder.com/465x540',
      thirdImage: 'https://via.placeholder.com/960x540',
      fourthImage: 'https://via.placeholder.com/960x540',
      title: 'ванна кімната',
    },
  ],
  sectionFourth: {
    images: {
      first: firstMinimalLeft,
      second: secondClassicLeft,
    },
  },
  sectionSix: [
    {
      id: 'sectionSixFirst',
      firstImage: firstMinimalLeft,
      secondImage: firstMinimalMid,
      thirdImage: firstMinimalRight,
      fourthImage: secondClassicLeft,
      fiveImage: secondClassicMid,
      nav: 'kit standart',
      title: '1 Збалансований вибір',
      subTitle: 'Для тих, хто цінує якість та надає перевагу  гармонійному поєднанню естетики та функціональності.',
    },
    {
      id: 'sectionSixSecond',
      firstImage: secondClassicLeft,
      secondImage: secondClassicRight,
      thirdImage: firstMinimalRight,
      fourthImage: secondClassicLeft,
      fiveImage: secondClassicMid,
      nav: 'kit select',
      title: '2 Збалансований вибір',
      subTitle: 'Для тих, хто цінує якість та надає перевагу  гармонійному поєднанню естетики та функціональності.',
    },
    {
      id: 'sectionSixThird',
      firstImage: secondClassicLeft,
      secondImage: sr,
      thirdImage: secondClassicRight,
      fourthImage: smid,
      fiveImage: secondClassicMid,
      nav: 'kit green',
      title: '3 Збалансований вибір',
      subTitle: 'Для тих, хто цінує якість та надає перевагу  гармонійному поєднанню естетики та функціональності.',
    },
    {
      id: 'sectionSixFourth',
      firstImage: secondClassicRight,
      secondImage: sr,
      thirdImage: secondClassicRight,
      fourthImage: smid,
      fiveImage: secondClassicMid,
      nav: 'kit full',
      title: '4 Збалансований вибір',
      subTitle: 'Для тих, хто цінує якість та надає перевагу  гармонійному поєднанню естетики та функціональності.',
    },
  ],
}
