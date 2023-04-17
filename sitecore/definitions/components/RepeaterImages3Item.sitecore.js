import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addTemplate({
    name: 'RepeaterImages3Item',
    displayName: 'RepeaterImages3Item',
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
    ],
  })
}
