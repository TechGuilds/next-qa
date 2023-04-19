import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'FinalrepeaterTest1999',
    displayName: 'FinalrepeaterTest1999',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    contentResolver: '{133F4392-F27D-4D7F-BA2C-24CE8F455A61}',
    fields: [],
  })
}
