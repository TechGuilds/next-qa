import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addRouteType({
    name: 'TechGuildsDigitalExperiencePlatformExperts',
    displayName: 'TechGuildsDigitalExperiencePlatformExperts',
    icon: SitecoreIcon.HomeFire,
    allowedPlaceholders: [],
    inherits: [''],
    insertOptions: ['TechGuildsDigitalExperiencePlatformExperts'],
    fields: [],
  })
}
