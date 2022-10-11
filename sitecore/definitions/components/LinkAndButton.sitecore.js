import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'LinkAndButton',
    displayName: 'LinkAndButton',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    fields: [
      {
        name: 'href',
        type: CommonFieldTypes.GeneralLink,
        standardValue: '#',
      },
      {
        name: 'text1',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Button',
      },
      {
        name: 'link',
        type: CommonFieldTypes.ItemLink,
        source: '/sitecore/media library',
      },
    ],
  })
}
