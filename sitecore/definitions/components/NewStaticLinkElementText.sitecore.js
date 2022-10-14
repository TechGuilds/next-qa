import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'NewStaticLinkElementText',
    displayName: 'NewStaticLinkElementText',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    fields: [
      {
        name: 'text1',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'StaticLinkText',
      },
    ],
  })
}
