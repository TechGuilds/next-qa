import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addTemplate({
    name: 'ProductCardRepeaterItem',
    displayName: 'ProductCardRepeaterItem',
    fields: [
      {
        name: 'text1',
        type: CommonFieldTypes.RichText,
      },
      {
        name: 'src',
        type: CommonFieldTypes.Image,
      },
      {
        name: 'alt',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'asdsasa',
      },
    ],
  })
}
