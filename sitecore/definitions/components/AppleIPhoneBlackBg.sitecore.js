import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'AppleIPhoneBlackBg',
    displayName: 'AppleIPhoneBlackBg',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    fields: [
      {
        name: 'bgImage1',
        type: CommonFieldTypes.Image,
        standardValue:
          'https://www.apple.com/v/home/as/images/heroes/iphone-14-pro/hero_iphone14pro__e5xbgo5ffhg2_largetall.jpg',
      },
    ],
  })
}
