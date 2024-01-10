import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addRouteType({
    name: 'AmicaSeniorLifestylesLuxurySeniorLivingResidences',
    displayName: 'AmicaSeniorLifestylesLuxurySeniorLivingResidences',
    icon: SitecoreIcon.HomeFire,
    allowedPlaceholders: [],
    inherits: [''],
    insertOptions: ['AmicaSeniorLifestylesLuxurySeniorLivingResidences'],
    fields: [],
  })
}
