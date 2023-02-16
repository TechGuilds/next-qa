import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'TestBgImag',
    displayName: 'TestBgImag',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    fields: [
      {
        name: 'text',
        type: CommonFieldTypes.SingleLineText,
        standardValue:
          'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
      },
      {
        name: 'bgImage',
        type: CommonFieldTypes.Image,
        standardValue:
          'https://i.ytimg.com/vi/1MaaiLo9z8Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBMsYKLnvs4fv2m_BcJOJ53aA8k7g',
      },
      {
        name: 'text1',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'This is a disabled BgImage',
      },
    ],
  })
}
