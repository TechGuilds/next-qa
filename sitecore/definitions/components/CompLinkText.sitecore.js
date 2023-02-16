import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'CompLinkText',
    displayName: 'CompLinkText',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    fields: [
      {
        name: 'value',
        type: CommonFieldTypes.RichText,
        standardValue:
          '<p>Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.</p>',
      },
      {
        name: 'text2',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Heading',
      },
      {
        name: 'text3',
        type: CommonFieldTypes.SingleLineText,
        standardValue:
          'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
      },
      {
        name: 'src',
        type: CommonFieldTypes.Image,
        standardValue: '/icons/default-imag.svg',
      },
      {
        name: 'alt',
        type: CommonFieldTypes.SingleLineText,
      },
    ],
  })
}
