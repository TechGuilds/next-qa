import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addTemplate({
    name: 'RepeaterLocalComponenttesItem',
    displayName: 'RepeaterLocalComponenttesItem',
    contentResolver: '2F5C334E5615423C82819FC180191302',
    fields: [
      {
        name: 'text2',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'text',
      },
    ],
  })
}
