import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'StaticTextsss',
    displayName: 'StaticTextsss',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    fields: [
      {
        name: 'text8',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'hgh',
      },
    ],
  })
}
