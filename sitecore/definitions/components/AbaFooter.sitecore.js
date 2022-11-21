import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'AbaFooter',
    displayName: 'AbaFooter',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    fields: [
      {
        name: 'src',
        type: CommonFieldTypes.Image,
        standardValue:
          'https://www.reformcreditunions.com/wp-content/uploads/2021/07/ABA-logo.svg',
      },
      {
        name: 'alt',
        type: CommonFieldTypes.SingleLineText,
      },
      {
        name: 'value',
        type: CommonFieldTypes.RichText,
        standardValue:
          '<div style="display: flex; justify-content: center"><p>Copyright © 2022 American Bankers Association | </p><a style="color: #1c3c5a; text-decoration: underline;" href="/about/">About this Campaign</a>',
      },
      {
        name: 'src1',
        type: CommonFieldTypes.Image,
        standardValue:
          'https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook2_colored_svg-128.png',
      },
      {
        name: 'alt1',
        type: CommonFieldTypes.SingleLineText,
      },
      {
        name: 'src2',
        type: CommonFieldTypes.Image,
        standardValue:
          'https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-128.png',
      },
      {
        name: 'alt2',
        type: CommonFieldTypes.SingleLineText,
      },
    ],
  })
}
