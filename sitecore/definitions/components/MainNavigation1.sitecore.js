import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'MainNavigation1',
    displayName: 'MainNavigation1',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    contentResolver: '',
    fields: [
      {
        name: 'href',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='undefined' linktype='external' url='/' anchor='' target=''/>",
      },
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
        name: 'text1',
        type: CommonFieldTypes.SingleLineText,
      },
    ],
  })
}
