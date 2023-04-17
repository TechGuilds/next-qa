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
        name: 'src',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://qa-app.kajoo.ca/icons/default-imag.svg"}',
      },
      {
        name: 'alt',
        type: CommonFieldTypes.SingleLineText,
      },
      {
        name: 'text',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Heading',
      },
    ],
  })
}
