import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addRouteType({
    name: 'SitecoreExperiencePlatform',
    displayName: 'SitecoreExperiencePlatform',
    icon: SitecoreIcon.HomeFire,
    allowedPlaceholders: ['kajoo-main'],
    inherits: [''],
    insertOptions: ['SitecoreExperiencePlatform'],
    fields: [],
  })
}
