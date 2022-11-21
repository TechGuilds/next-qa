import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'AbaVideo',
    displayName: 'AbaVideo',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    fields: [
      {
        name: 'text',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Large Credit Unions’ Abuse of Their Tax Exemption',
      },
      {
        name: 'src1',
        type: CommonFieldTypes.ItemLink,
        standardValue: 'https://www.youtube.com/watch?v=qOeBnwRDLy4',
        source: '/sitecore/media library',
      },
    ],
  })
}
