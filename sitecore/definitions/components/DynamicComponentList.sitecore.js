import { SitecoreIcon } from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addTemplate({
    name: 'DynamicComponentList',
    displayName: 'DynamicComponentList',
    fields: [
      {
        name: 'Text',
        type: 'Single-Line Text',
        standardValue: 'Lorem Ipsum',
      },
    ],
  })
}
