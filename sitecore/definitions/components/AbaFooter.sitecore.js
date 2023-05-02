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
    contentResolver: '',
    fields: [
      {
        name: 'src',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://www.reformcreditunions.com/wp-content/uploads/2021/07/ABA-logo.svg"}',
      },
      {
        name: 'alt3',
        type: CommonFieldTypes.SingleLineText,
      },
      {
        name: 'value',
        type: CommonFieldTypes.RichText,
        standardValue:
          '<div style="display: block; align-items: center; margin: auto; text-align: center">Copyright © 2022 American Bankers Association | <a style="color: #1c3c5a; text-decoration: underline;" href="/about/">About this Campaign</a> </div>',
      },
      {
        name: 'src1',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook2_colored_svg-128.png"}',
      },
      {
        name: 'alt1',
        type: CommonFieldTypes.SingleLineText,
      },
      {
        name: 'src2',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-128.png"}',
      },
      {
        name: 'alt2',
        type: CommonFieldTypes.SingleLineText,
      },
    ],
  })
}
