import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'StaticTexts',
    displayName: 'StaticTexts',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    fields: [
      {
        name: 'text8',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'hgh',
      },
      {
        name: 'value',
        type: CommonFieldTypes.RichText,
        standardValue:
          '<p>Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.</p>',
      },
      {
        name: 'text6',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Heading',
      },
      {
        name: 'src',
        type: CommonFieldTypes.ItemLink,
        standardValue: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
        source: '/sitecore/media library',
      },
      {
        name: 'src1',
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
