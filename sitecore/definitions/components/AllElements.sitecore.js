import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'AllElements',
    displayName: 'AllElements',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    fields: [
      {
        name: 'bgImage',
        type: CommonFieldTypes.Image,
        standardValue: 'hgfhgfh',
      },
      {
        name: 'text1',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Heading',
      },
      {
        name: 'alt',
        type: CommonFieldTypes.SingleLineText,
      },
      {
        name: 'link',
        type: CommonFieldTypes.ItemLink,
        source: '/sitecore/media library',
      },
    ],
  })
}
