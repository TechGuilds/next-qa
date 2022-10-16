import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'ComponentLo',
    displayName: 'ComponentLo',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    fields: [
      {
        name: 'href',
        type: CommonFieldTypes.GeneralLink,
        standardValue: '#Linck.com',
      },
    ],
  })
}
