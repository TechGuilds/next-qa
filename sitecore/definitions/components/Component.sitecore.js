import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'Component',
    displayName: 'Component',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    fields: [
      {
        name: 'bgImage1',
        type: CommonFieldTypes.Image,
        standardValue:
          'https://i.ytimg.com/vi/1MaaiLo9z8Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBMsYKLnvs4fv2m_BcJOJ53aA8k7g',
      },
    ],
  })
}
