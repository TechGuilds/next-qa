import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'IntroOneColumn',
    displayName: 'IntroOneColumn',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main', 'kajoo-main'],
    contentResolver: '',
    fields: [
      {
        name: 'text',
        type: CommonFieldTypes.SingleLineText,
        standardValue:
          'At Amica, every day is yours to spend exactly as you wish',
      },
      {
        name: 'text1',
        type: CommonFieldTypes.SingleLineText,
      },
      {
        name: 'text2',
        type: CommonFieldTypes.SingleLineText,
        standardValue:
          '\nAmica offers an exceptional senior living experience unlike any other. Every residence offers elegant and purposeful designs, premium amenities, unparalleled care that evolves as you do and a lifestyle that leaves you in full control. At Amica, you’ll never have to move again. And you’ll never want to.\n',
      },
      {
        name: 'text3',
        type: CommonFieldTypes.SingleLineText,
      },
    ],
  })
}
