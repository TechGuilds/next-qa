import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'FigmaTestNur',
    displayName: 'FigmaTestNur',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    contentResolver: '',
    fields: [
      {
        name: 'src',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/containers/orgs/60d5efadff0a5060c3aaa66d/assets/1wv00E_eDQzOhq5_uoijr.svg"}',
      },
      {
        name: 'alt',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Rectangle97I12095913712',
      },
      {
        name: 'text',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Accessibility',
      },
      {
        name: 'text1',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Terms',
      },
      {
        name: 'text2',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Privacy',
      },
      {
        name: 'text3',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Feedback',
      },
      {
        name: 'alt1',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Vector16I12095913718',
      },
      {
        name: 'src1',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/containers/orgs/60d5efadff0a5060c3aaa66d/assets/iudPk9eB4aezSrunJFoTn.svg"}',
      },
      {
        name: 'text4',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Care',
      },
      {
        name: 'text5',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Independant Living',
      },
      {
        name: 'text6',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Assisted Living',
      },
      {
        name: 'text7',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Memory Care',
      },
      {
        name: 'text8',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Life at Amica',
      },
      {
        name: 'text9',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Health & Safety',
      },
      {
        name: 'text10',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Healthcare Professionals',
      },
      {
        name: 'text11',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'About',
      },
      {
        name: 'text12',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Diversity, equality & Inclusion',
      },
      {
        name: 'text13',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Leadership Team',
      },
      {
        name: 'text14',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Helping Hands Charity',
      },
      {
        name: 'text15',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Careers',
      },
      {
        name: 'text16',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Volunteers',
      },
      {
        name: 'text17',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Resources',
      },
      {
        name: 'text18',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Webinars',
      },
      {
        name: 'src2',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/containers/orgs/60d5efadff0a5060c3aaa66d/assets/3p7t22WcIqO8PY5TDXDeK.png"}',
      },
      {
        name: 'alt2',
        type: CommonFieldTypes.SingleLineText,
        standardValue: '2AmicaSLCorpLogoPMSntefy01I12095913733',
      },
      {
        name: 'text19',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Find a residence',
      },
      {
        name: 'text20',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Book a tour',
      },
      {
        name: 'text21',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Contact',
      },
      {
        name: 'text22',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Press',
      },
      {
        name: 'text23',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Partnerships',
      },
      {
        name: 'text24',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Blog',
      },
    ],
  })
}
