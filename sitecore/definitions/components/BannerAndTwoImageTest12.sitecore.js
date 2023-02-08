import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'BannerAndTwoImageTest12',
    displayName: 'BannerAndTwoImageTest12',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    contentResolver: '',
    fields: [
      {
        name: 'src',
        type: CommonFieldTypes.Image,
        standardValue: '/icons/default-imag.svg',
      },
    ],
  })
}
