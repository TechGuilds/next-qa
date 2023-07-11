import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'Test5Gg',
    displayName: 'Test5Gg',
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
