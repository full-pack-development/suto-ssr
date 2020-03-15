import sevenSectionBack from './assets/sectionSeven/sevenSectionBack.jpg'
import secondClassicRight from './assets/sectionTwo/secondClassicRight.jpg'
import brand from './assets/brands/brand.png'

export const textSections = {
  sectionSeven: {
    image: sevenSectionBack,
  },
  brands: [
    {
      id: 'br1',
      image: brand,
    },
    {
      id: 'br2',
      image: brand,
    },
    {
      id: 'br3',
      image: brand,
    },
    {
      id: 'br4',
      image: brand,
    },
    {
      id: 'br5',
      image: brand,
    },
    {
      id: 'br6',
      image: brand,
    },
  ],
  sectionFive: {
    columns: [
      {
        title: 'від 300 $/м²',
        subtitle: 'дизайнерський ремонт',
        textFirst: 'з матеріалами та',
        textSecond: 'обладнанням включно',
      },
      {
        title: 'від 400 $/м²',
        subtitle: 'дизайнерський ремонт',
        textFirst: 'з матеріалами та',
        textSecond: 'обладнанням включно',
        list: ['меблі', 'текстиль', 'декор'],
      },
    ],
    button: {
      text: 'детальніше про ціни',
      href: '/prices',
    },
    image: secondClassicRight,
  },
}
