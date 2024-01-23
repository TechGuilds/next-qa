import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'DynamicComponent',
    displayName: 'DynamicComponent',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    contentResolver: '',
    fields: [
      {
        name: 'src18',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/-xCjCtfQDRJnhB5r9vEmh.png"}',
      },
      {
        name: 'alt18',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'image-asset',
      },
      {
        name: 'src19',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/-pBf1g4PU9JsSgmmvEiiJ.png"}',
      },
      {
        name: 'alt19',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'image-asset',
      },
      {
        name: 'src20',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/-Zx4mo_F2MCh0XdNywtYL.svg"}',
      },
      {
        name: 'alt20',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'image-asset',
      },
      {
        name: 'src23',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/021Z0B5BGJdCB-NgAGIcs.png"}',
      },
      {
        name: 'alt23',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'image-asset',
      },
    ],
  })
}
