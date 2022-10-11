import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'LinkButtonComponent',
    displayName: 'LinkButtonComponent',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    fields: [
      {
        name: 'href',
        type: CommonFieldTypes.GeneralLink,
        standardValue: 'https://google.com',
      },
      {
        name: 'text',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Click Me',
      },
      {
        name: 'link',
        type: CommonFieldTypes.ItemLink,
        standardValue: 'https://kajoo.ai',
        source: '/sitecore/media library',
      },
    ],
  })
}
