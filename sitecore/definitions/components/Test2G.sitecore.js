import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'Test2G',
    displayName: 'Test2G',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    contentResolver: '',
    fields: [
      {
        name: 'fields.text',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Heading',
      },
    ],
  })
}
