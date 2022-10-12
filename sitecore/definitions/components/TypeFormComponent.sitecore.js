import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'TypeFormComponent',
    displayName: 'TypeFormComponent',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    fields: [
      {
        name: 'mode',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'widget',
      },
      {
        name: 'buttonText',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Typeform',
      },
    ],
  })
}
