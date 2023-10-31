import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addRouteType({
    name: 'TypeScriptToZodSchema',
    displayName: 'TypeScriptToZodSchema',
    icon: SitecoreIcon.HomeFire,
    allowedPlaceholders: [],
    inherits: [''],
    insertOptions: ['TypeScriptToZodSchema'],
    fields: [],
  })
}
