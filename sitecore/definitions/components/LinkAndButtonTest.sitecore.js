import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'LinkAndButtonTest',
    displayName: 'LinkAndButtonTest',
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
        source: '/sitecore/media library',
      },
      {
        name: 'href',
        type: CommonFieldTypes.GeneralLink,
        standardValue: '#',
      },
    ],
  })
}
