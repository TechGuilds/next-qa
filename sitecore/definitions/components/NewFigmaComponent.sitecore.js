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
        name: 'src',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/60d5efadff0a5060c3aaa66d/assets/rLQfasnguqbf3PgDOYb15.svg"}',
      },
      {
        name: 'alt',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Rectangle01012',
      },
      {
        name: 'text',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Register',
      },
      {
        name: 'src1',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/60d5efadff0a5060c3aaa66d/assets/EF6FucRUhJnNZrhJ_it2k.svg"}',
      },
      {
        name: 'alt1',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Rectangle201016',
      },
      {
        name: 'text1',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Email address',
      },
      {
        name: 'src2',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/60d5efadff0a5060c3aaa66d/assets/DrTSkf8njGX6UzeavNfWs.svg"}',
      },
      {
        name: 'alt2',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Rectangle201019',
      },
      {
        name: 'text2',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Create password',
      },
      {
        name: 'alt4',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Union01013',
      },
      {
        name: 'src4',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/60d5efadff0a5060c3aaa66d/assets/RtGODMoC8jAbL0_MsEaxi.svg"}',
      },
      {
        name: 'src5',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/60d5efadff0a5060c3aaa66d/assets/lppQ3oMJPAe-auQdbvK2f.png"}',
      },
      {
        name: 'alt5',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Border01029',
      },
      {
        name: 'alt6',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Cap01030',
      },
      {
        name: 'src6',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/60d5efadff0a5060c3aaa66d/assets/O-7rnkhIsTR6zUZE0-yVJ.svg"}',
      },
      {
        name: 'src7',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/60d5efadff0a5060c3aaa66d/assets/NlFlPCoVPAMkctriVTuOH.svg"}',
      },
      {
        name: 'alt7',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Capacity01031',
      },
      {
        name: 'alt8',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Wifi01033',
      },
      {
        name: 'src8',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/60d5efadff0a5060c3aaa66d/assets/QgkJaaOycduz8u_-RCChf.svg"}',
      },
      {
        name: 'alt9',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Cell01038',
      },
      {
        name: 'src9',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/60d5efadff0a5060c3aaa66d/assets/foMbdAwbJv7q7ZANWk4aC.svg"}',
      },
      {
        name: 'text4',
        type: CommonFieldTypes.SingleLineText,
        standardValue: '9:27',
      },
      {
        name: 'src3',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/60d5efadff0a5060c3aaa66d/assets/NXzbtWwmgxIymIFeXEQrE.svg"}',
      },
      {
        name: 'alt3',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Rectangle201022',
      },
      {
        name: 'text3',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'next',
      },
    ],
  })
}
