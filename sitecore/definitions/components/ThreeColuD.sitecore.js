import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'ThreeColuD',
    displayName: 'ThreeColuD',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    fields: [
      {
        name: 'src',
        type: CommonFieldTypes.Image,
        standardValue: '/graphics/default.png',
      },
      {
        name: 'text',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'HEADER',
      },
      {
        name: 'text1',
        type: CommonFieldTypes.SingleLineText,
        standardValue:
          'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
      },
      {
        name: 'src1',
        type: CommonFieldTypes.Image,
        standardValue: '/graphics/default.png',
      },
      {
        name: 'text2',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'HEADER',
      },
      {
        name: 'text3',
        type: CommonFieldTypes.SingleLineText,
        standardValue:
          'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
      },
      {
        name: 'src2',
        type: CommonFieldTypes.Image,
        standardValue: '/graphics/default.png',
      },
      {
        name: 'text4',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'HEADER',
      },
      {
        name: 'text5',
        type: CommonFieldTypes.SingleLineText,
        standardValue:
          'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
      },
    ],
  })
}
