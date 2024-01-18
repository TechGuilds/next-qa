import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'ContentBlock',
    displayName: 'ContentBlock',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    contentResolver: '',
    fields: [
      {
        name: 'Title',
        type: CommonFieldTypes.RichText,
        standardValue: '<h1>naturally beautiful.<br>naturally biolage.</h1>',
      },
      {
        name: 'Description',
        type: CommonFieldTypes.RichText,
        standardValue:
          'at biolage we are committed to creating hair care that combines the best of science and nature.',
      },
    ],
  })
}
