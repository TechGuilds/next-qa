import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'HeroBanner',
    displayName: 'HeroBanner',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    contentResolver: '',
    fields: [
      {
        name: 'DesktopBgImage',
        type: CommonFieldTypes.Image,
        standardValue:
          'https://www.biolage.ca/dist/img/biolage_header_desktop_en.jpg',
      },
    ],
  })
}
