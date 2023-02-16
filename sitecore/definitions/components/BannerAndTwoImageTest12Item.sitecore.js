import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addTemplate({
    name: 'BannerAndTwoImageTest12Item',
    displayName: 'BannerAndTwoImageTest12Item',
    fields: [
      {
        name: 'text1',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Heading',
      },
      {
        name: 'text',
        type: CommonFieldTypes.SingleLineText,
        standardValue:
          'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
      },
      {
        name: 'src2',
        type: CommonFieldTypes.Image,
        standardValue: '/icons/default-imag.svg',
      },
      {
        name: 'src3',
        type: CommonFieldTypes.Image,
        standardValue: '/icons/default-imag.svg',
      },
      {
        name: 'alt',
        type: CommonFieldTypes.SingleLineText,
      },
      {
        name: 'src1',
        type: CommonFieldTypes.Image,
        standardValue: '/icons/default-imag.svg',
      },
    ],
  })
}
