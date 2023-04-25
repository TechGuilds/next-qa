import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'NewFigmaComponent1',
    displayName: 'NewFigmaComponent1',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    contentResolver: '',
    fields: [
      {
        name: 'src',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/60d5efadff0a5060c3aaa66d/assets/ZUJUUwCnXMJkOuAA5qMqO.svg"}',
      },
      {
        name: 'alt',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Rectangle0496',
      },
      {
        name: 'alt1',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Ellipse0497',
      },
      {
        name: 'src1',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/60d5efadff0a5060c3aaa66d/assets/9ADg01b_UmUpNaX5SaUUC.svg"}',
      },
      {
        name: 'text',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Jane',
      },
      {
        name: 'text1',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'San francisco, ca',
      },
      {
        name: 'src2',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/60d5efadff0a5060c3aaa66d/assets/g2_Gge_qJJMhkVQ_PsoR8.png"}',
      },
      {
        name: 'alt2',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Rectangle20500',
      },
      {
        name: 'src3',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/60d5efadff0a5060c3aaa66d/assets/u5Qc_rPq_1U1alNGwbjAL.png"}',
      },
      {
        name: 'alt3',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Rectangle250501',
      },
      {
        name: 'src4',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/60d5efadff0a5060c3aaa66d/assets/O__X6yoB6vBUYbM2Ux5Bu.png"}',
      },
      {
        name: 'alt4',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Rectangle210502',
      },
      {
        name: 'src5',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/60d5efadff0a5060c3aaa66d/assets/Ask0jVNfVevnm9FI2IVhP.png"}',
      },
      {
        name: 'alt5',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Rectangle230503',
      },
      {
        name: 'src6',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/60d5efadff0a5060c3aaa66d/assets/Ch-I4VlaeZpJ5K5ulRPp2.png"}',
      },
      {
        name: 'alt6',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Rectangle240504',
      },
      {
        name: 'src7',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/60d5efadff0a5060c3aaa66d/assets/HBHYRjHaMiX3k20adFgcI.png"}',
      },
      {
        name: 'alt7',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Rectangle220505',
      },
      {
        name: 'src11',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/60d5efadff0a5060c3aaa66d/assets/9Ke9x8kNKCfcqPTjj2urR.png"}',
      },
      {
        name: 'alt11',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Border01048',
      },
      {
        name: 'alt12',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Cap01049',
      },
      {
        name: 'src12',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/60d5efadff0a5060c3aaa66d/assets/Reeju12fIE-lV43fe3Tdz.svg"}',
      },
      {
        name: 'src13',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/60d5efadff0a5060c3aaa66d/assets/YS0Ry-0UQmDeagjPHxQdj.svg"}',
      },
      {
        name: 'alt13',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Capacity01050',
      },
      {
        name: 'alt14',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Wifi01052',
      },
      {
        name: 'src14',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/60d5efadff0a5060c3aaa66d/assets/XT-0JHlXqm3WnkQ-I9vo-.svg"}',
      },
      {
        name: 'alt15',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Cell01057',
      },
      {
        name: 'src15',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/60d5efadff0a5060c3aaa66d/assets/0SDkUf2ygQPgc76CX67c0.svg"}',
      },
      {
        name: 'text5',
        type: CommonFieldTypes.SingleLineText,
        standardValue: '9:27',
      },
      {
        name: 'src16',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/60d5efadff0a5060c3aaa66d/assets/wkG8rh19HAgK_rWaSt_MF.svg"}',
      },
      {
        name: 'alt16',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Background01070',
      },
      {
        name: 'alt17',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Union01071',
      },
      {
        name: 'src17',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/60d5efadff0a5060c3aaa66d/assets/pOQl5snFBhBNjOOeFeQNT.svg"}',
      },
      {
        name: 'alt18',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Union01082',
      },
      {
        name: 'src18',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/60d5efadff0a5060c3aaa66d/assets/ugn7cFLY7sMoGjdocqBHv.svg"}',
      },
      {
        name: 'src19',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/60d5efadff0a5060c3aaa66d/assets/GMx5pFswTSeNxairPlfvP.svg"}',
      },
      {
        name: 'alt19',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Rectangle01086',
      },
      {
        name: 'alt20',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Union01087',
      },
      {
        name: 'src20',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/60d5efadff0a5060c3aaa66d/assets/ReqXE6iDGEv6NlwuqlycS.svg"}',
      },
      {
        name: 'alt21',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Union01091',
      },
      {
        name: 'src21',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/60d5efadff0a5060c3aaa66d/assets/7GDWNqW9T0kAJzzAGTeq-.svg"}',
      },
      {
        name: 'src22',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/60d5efadff0a5060c3aaa66d/assets/ie88hRGv-ISX09EFMY9mc.svg"}',
      },
      {
        name: 'alt22',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'person01096',
      },
      {
        name: 'src23',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/60d5efadff0a5060c3aaa66d/assets/0ffuEiRo_4okvSG8K3p3l.svg"}',
      },
      {
        name: 'alt23',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Shape01099',
      },
      {
        name: 'src8',
        type: CommonFieldTypes.Image,
      },
      {
        name: 'alt8',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Rectangle201982',
      },
      {
        name: 'text2',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'see more',
      },
      {
        name: 'src9',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/60d5efadff0a5060c3aaa66d/assets/LAYpiKjrAfP0xfJu-igQs.svg"}',
      },
      {
        name: 'alt9',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Rectangle201979',
      },
      {
        name: 'text3',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'follow jane',
      },
      {
        name: 'src10',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/60d5efadff0a5060c3aaa66d/assets/ufSsRX6iFLqF6Odz8i7I7.svg"}',
      },
      {
        name: 'alt10',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Rectangle201066',
      },
      {
        name: 'text4',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'message',
      },
    ],
  })
}
