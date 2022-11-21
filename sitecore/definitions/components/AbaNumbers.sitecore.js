import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'AbaNumbers',
    displayName: 'AbaNumbers',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    fields: [
      {
        name: 'text6',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Key Statistics',
      },
      {
        name: 'text15',
        type: CommonFieldTypes.SingleLineText,
        standardValue: '\n\t\t\t\t\t',
      },
      {
        name: 'text16',
        type: CommonFieldTypes.SingleLineText,
        standardValue: '\n\t\t\t',
      },
      {
        name: 'text17',
        type: CommonFieldTypes.SingleLineText,
        standardValue: '\n\t\t\t\t',
      },
      {
        name: 'text19',
        type: CommonFieldTypes.SingleLineText,
        standardValue: '\n\t\t\t\t',
      },
      {
        name: 'text20',
        type: CommonFieldTypes.SingleLineText,
        standardValue: '$14,702',
      },
      {
        name: 'text21',
        type: CommonFieldTypes.SingleLineText,
        standardValue: '\n\t\t\t\t',
      },
      {
        name: 'text22',
        type: CommonFieldTypes.SingleLineText,
        standardValue: '\n\t\t\t',
      },
      {
        name: 'text23',
        type: CommonFieldTypes.SingleLineText,
        standardValue: '\n\t\t\t\t\t',
      },
      {
        name: 'text24',
        type: CommonFieldTypes.SingleLineText,
        standardValue: '\n\t\t\t\t',
      },
      {
        name: 'text29',
        type: CommonFieldTypes.SingleLineText,
        standardValue:
          'Average taxes paid by Americans in 2019. \n\nPaid by credit unions? $0. ',
      },
      {
        name: 'text43',
        type: CommonFieldTypes.SingleLineText,
        standardValue: '$2.12T',
      },
      {
        name: 'text53',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Total assets in federally insured credit unions.',
      },
    ],
  })
}
