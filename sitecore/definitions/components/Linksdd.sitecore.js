import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'Linksdd',
    displayName: 'Linksdd',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    fields: [
      {
        name: 'href',
        type: CommonFieldTypes.GeneralLink,
        standardValue: 'www.example.com',
      },
    ],
  })
}
