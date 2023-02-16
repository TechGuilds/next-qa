import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'HandDrawn1',
    displayName: 'HandDrawn1',
    contentResolver: '',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    fields: [
      {
        name: 'src',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/TechGuilds%20Consulting%20Inc._60d5efadff0a5060c3aaa66d/assets/rSAVDJ8MD-2GW1sZo7F5n.png"}',
      },
      {
        name: 'src1',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/TechGuilds%20Consulting%20Inc._60d5efadff0a5060c3aaa66d/assets/pbaqMffHDxeRVAMg0_Olp.png"}',
      },
      {
        name: 'src2',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/TechGuilds%20Consulting%20Inc._60d5efadff0a5060c3aaa66d/assets/RDVvoU7q2VB8w6yhBdsGl.png"}',
      },
      {
        name: 'text',
        type: CommonFieldTypes.SingleLineText,
        standardValue:
          'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
      },
      {
        name: 'text1',
        type: CommonFieldTypes.SingleLineText,
        standardValue:
          'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
      },
      {
        name: 'text2',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Button',
      },
      {
        name: 'text3',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Button',
      },
      {
        name: 'text4',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Button',
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
