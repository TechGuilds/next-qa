import { SitecoreIcon } from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addTemplate({
    name: 'DynamicComponentListItem',
    displayName: 'DynamicComponentListItem',
    fields: [
      {
        name: 'Text title',
        type: 'Single-Line Text',
        standardValue: 'Lorem Ipsum',
      },
    ],
  })
}
