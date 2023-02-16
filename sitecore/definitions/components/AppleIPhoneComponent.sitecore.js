import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'AppleIPhoneComponent',
    displayName: 'AppleIPhoneComponent',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    fields: [
      {
        name: 'bgImage',
        type: CommonFieldTypes.Image,
      },
      {
        name: 'bgImage1',
        type: CommonFieldTypes.Image,
      },
      {
        name: 'text',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'iPhone 14 Pro',
      },
      {
        name: 'text1',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Pro. Beyond.',
      },
      {
        name: 'text2',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Available starting 9:16',
      },
      {
        name: 'bgImage2',
        type: CommonFieldTypes.Image,
      },
      {
        name: 'bgImage3',
        type: CommonFieldTypes.Image,
      },
      {
        name: 'bgImage4',
        type: CommonFieldTypes.Image,
      },
      {
        name: 'bgImage5',
        type: CommonFieldTypes.Image,
      },
      {
        name: 'src',
        type: CommonFieldTypes.Image,
        standardValue:
          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTcnIGhlaWdodD0nMTYnIHZpZXdCb3g9JzAgMCAxNyAxNicgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTYuNDQwNDMgMTMuMjhMMTAuNzg3MSA4LjkzMzNDMTEuMzAwNCA4LjQxOTk3IDExLjMwMDQgNy41Nzk5NyAxMC43ODcxIDcuMDY2NjRMNi40NDA0MyAyLjcxOTk3JyBzdHJva2U9JyMyOTk3RkYnIHN0cm9rZS13aWR0aD0nMS41JyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcvPgo8L3N2Zz4K',
      },
      {
        name: 'alt',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'arrowright128614779',
      },
      {
        name: 'bgImage6',
        type: CommonFieldTypes.Image,
      },
      {
        name: 'text5',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Pre-order',
      },
      {
        name: 'bgImage7',
        type: CommonFieldTypes.Image,
      },
      {
        name: 'bgImage8',
        type: CommonFieldTypes.Image,
      },
      {
        name: 'src1',
        type: CommonFieldTypes.Image,
        standardValue:
          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTcnIGhlaWdodD0nMTYnIHZpZXdCb3g9JzAgMCAxNyAxNicgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTYuNDQwNDMgMTMuMjhMMTAuNzg3MSA4LjkzMzNDMTEuMzAwNCA4LjQxOTk3IDExLjMwMDQgNy41Nzk5NyAxMC43ODcxIDcuMDY2NjRMNi40NDA0MyAyLjcxOTk3JyBzdHJva2U9JyMyOTk3RkYnIHN0cm9rZS13aWR0aD0nMS41JyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcvPgo8L3N2Zz4K',
      },
      {
        name: 'alt1',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'arrowrightI128614784128614779',
      },
      {
        name: 'src2',
        type: CommonFieldTypes.Image,
        standardValue:
          'https://www.apple.com/v/home/as/images/heroes/iphone-14-pro/hero_iphone14pro__e5xbgo5ffhg2_largetall.jpg',
      },
      {
        name: 'alt2',
        type: CommonFieldTypes.SingleLineText,
        standardValue:
          'heroiphone14propreordercc1jjc6hq7malargetall2x128614785',
      },
    ],
  })
}
