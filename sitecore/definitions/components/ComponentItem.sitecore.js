import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addTemplate({
    name: 'ComponentItem',
    displayName: 'ComponentItem',
    fields: [
      {
        name: 'title',
        type: CommonFieldTypes.SingleLineText,
      },
      {
        name: 'image',
        type: CommonFieldTypes.Image,
        standardValue: '/icons/default-imag.svg',
      },
    ],
  })
}
