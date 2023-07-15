import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'SomethingElse89',
    displayName: 'SomethingElse89',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    contentResolver: '',
    fields: [],
  })
}
