import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'NewFigmaComponent',
    displayName: 'NewFigmaComponent',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    contentResolver: '',
    fields: [
      {
        name: 'text',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Welcome Lorem Ipsum',
      },
      {
        name: 'text1',
        type: CommonFieldTypes.SingleLineText,
        standardValue:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut neque, nec eu nulla. Pharetra, sodales lacus, nibh lacus, sed quam tortor. Magnis ipsum felis, iaculis facilisi at adipiscing turpis mauris tincidunt. Fermentum metus aliquam.',
      },
      {
        name: 'src',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/qa/orgs/60d5efadff0a5060c3aaa66d/assets/yxm5qsG6fxRay2hyyQyug.png"}',
      },
      {
        name: 'alt',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'imagecontainer221925548',
      },
      {
        name: 'text2',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'About NWMO',
      },
    ],
  })
}
