import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'TestCol',
    displayName: 'TestCol',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    fields: [
      {
        name: 'src',
        type: CommonFieldTypes.Image,
        standardValue: '/icons/default-imag.svg',
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
        name: 'src2',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/TechGuilds%20Consulting%20Inc._60d5efadff0a5060c3aaa66d/components/GFA4wxCXu0LKOI5EYIVk3.png"}',
      },
      {
        name: 'alt',
        type: CommonFieldTypes.SingleLineText,
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
        name: 'formId',
        type: CommonFieldTypes.SingleLineText,
      },
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
      {
        name: 'text4',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'HEADER',
      },
      {
        name: 'text6',
        type: CommonFieldTypes.SingleLineText,
        standardValue:
          'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
      },
      {
        name: 'value',
        type: CommonFieldTypes.RichText,
        standardValue:
          '<p>dgfdgfdsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.</p>',
      },
      {
        name: 'text5',
        type: CommonFieldTypes.SingleLineText,
        standardValue:
          'dsdsdt amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
      },
    ],
  })
}
