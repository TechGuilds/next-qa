import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'MainNavigation',
    displayName: 'MainNavigation',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    contentResolver: '',
    fields: [
      {
        name: 'src',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://amica.kajoo.ca/-/media/amica/logos/amica_sl_corplogo_pms_rev_boxed.svg?h=210&la=en&w=417&hash=6048F369EE2E2ACF346F4C59C3C226D01550AF9E"}',
      },
      {
        name: 'alt',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Amica',
      },
      {
        name: 'text',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Amica Conversations',
      },
      {
        name: 'text1',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Amica Difference',
      },
      {
        name: 'text2',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Find a Residence',
      },
      {
        name: 'text3',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Tools & Resources',
      },
      {
        name: 'text4',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Book a Tour',
      },
    ],
  })
}
