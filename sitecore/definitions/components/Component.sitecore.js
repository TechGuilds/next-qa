import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'Component',
    displayName: 'Component',
    contentResolver: '',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    fields: [
      {
        name: 'items',
        type: CommonFieldTypes.ContentList,
        standardValue: '[{},{},{}]',
      },
    ],
  })
}
