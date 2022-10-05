/* eslint-disable */
// @ts-nocheck
import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'prjct-1003',
    displayName: 'prjct-1003',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      {
        name: 'text_3_text',
        type: CommonFieldTypes.SingleLineText,
        standardValue:
          'Sitecore Soup to Nuts (Content Management Fundamentals + Personalization and Context Marketing)\r',
      },
      {
        name: 'text_4_text',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Duration: 5 Days\r',
      },
    ],
  })
}
