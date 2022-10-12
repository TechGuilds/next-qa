import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'Btn',
    displayName: 'Btn',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    fields: [
      {
        name: 'text',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Button',
      },
      {
        name: 'link',
        type: CommonFieldTypes.ItemLink,
        standardValue: 'www.google.com',
        source: '/sitecore/media library',
      },
      {
        name: 'text1',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Button',
      },
      {
        name: 'link1',
        type: CommonFieldTypes.ItemLink,
        source: '/sitecore/media library',
      },
    ],
  })
}
