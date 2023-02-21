import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'ProductCardRepeater',
    displayName: 'ProductCardRepeater',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    contentResolver: '',
    fields: [
      {
        name: 'text',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Home made pizza',
      },
      {
        name: 'text1',
        type: CommonFieldTypes.SingleLineText,
        standardValue: '$19',
      },
      {
        name: 'src',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/60d5efadff0a5060c3aaa66d/assets/CRWGiE_dEU4wd5MPOnvWB.svg"}',
      },
      {
        name: 'alt',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'antdesignstarfilled104268',
      },
      {
        name: 'text2',
        type: CommonFieldTypes.SingleLineText,
        standardValue: '4.7',
      },
      {
        name: 'text3',
        type: CommonFieldTypes.SingleLineText,
        standardValue: '50-79',
      },
      {
        name: 'text4',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'min',
      },
      {
        name: 'src1',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/60d5efadff0a5060c3aaa66d/assets/GRIcH8XoRPM72-hmHKNYT.svg"}',
      },
      {
        name: 'alt1',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Group104278',
      },
      {
        name: 'bgImage',
        type: CommonFieldTypes.Image,
        standardValue:
          'https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/60d5efadff0a5060c3aaa66d/assets/bJAc-RzWnLcWuVI3x_Oou.png',
      },
      {
        name: 'text5',
        type: CommonFieldTypes.SingleLineText,
        standardValue: '50%',
      },
    ],
  })
}
