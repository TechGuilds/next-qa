import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'AppleNavMobile',
    displayName: 'AppleNavMobile',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    fields: [
      {
        name: 'src1',
        type: CommonFieldTypes.Image,
        standardValue:
          'https://kajoo.nyc3.digitaloceanspaces.com/temp/apple-burger.png',
      },
      {
        name: 'alt1',
        type: CommonFieldTypes.SingleLineText,
      },
      {
        name: 'src2',
        type: CommonFieldTypes.Image,
        standardValue:
          'https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_small.svg',
      },
      {
        name: 'alt2',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Group3249',
      },
      {
        name: 'src',
        type: CommonFieldTypes.Image,
        standardValue:
          'https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_bag_image__yzte50i47ciu_large.svg',
      },
      {
        name: 'alt',
        type: CommonFieldTypes.SingleLineText,
      },
    ],
  })
}
