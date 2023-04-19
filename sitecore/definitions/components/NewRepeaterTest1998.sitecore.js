import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'NewRepeaterTest1998',
    displayName: 'NewRepeaterTest1998',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    contentResolver: '133F4392F27D4D7FBA2C24CE8F455A61',
    fields: [],
  })
}
