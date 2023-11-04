import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addRouteType({
    name: 'Page1',
    displayName: 'Page1',
    icon: SitecoreIcon.HomeFire,
    allowedPlaceholders: ['kajoo-main'],
    inherits: [''],
    insertOptions: ['Page1'],
    fields: [],
  })
}
