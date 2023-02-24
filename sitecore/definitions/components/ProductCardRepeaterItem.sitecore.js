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
        name: 'Title',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'asdsasa',
      },
      {
        name: 'Image',
        type: CommonFieldTypes.Image,
      },
      {
        name: 'Description',
        type: CommonFieldTypes.RichText,
      },
    ],
  })
}
