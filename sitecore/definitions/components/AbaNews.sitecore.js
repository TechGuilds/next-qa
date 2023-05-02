import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'AbaNews',
    displayName: 'AbaNews',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    contentResolver: '',
    fields: [
      {
        name: 'text',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Recent News and Insights',
      },
      {
        name: 'text1',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'NEWS',
      },
      {
        name: 'text3',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'NOVEMBER 2, 2022',
      },
      {
        name: 'href',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='Dividends or Division I Donations? For One Utah Credit Union, It’s Millions for Sports Stadiums' linktype='external' url='#' anchor='' target=''/>",
      },
      {
        name: 'value',
        type: CommonFieldTypes.RichText,
        standardValue:
          '<p style="color: #262626; line-height: 1.8em; font-size: 1rem;">Last week, Utah Valley University (UVU) announced “the largest single gift in UVU’s history,” a $28.5 million pledge from Utah Community Credit Union (UCCU), with $20 million earmarked for a state-of-the-art soccer stadium featuring 10 luxury suites. This questionable use of credit union member – and taxpayer – resources highlights a troublesome trend within the credit union industry.</p>',
      },
      {
        name: 'link',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='Load More News' linktype='external' url='#' anchor='' target=''/>",
      },
    ],
  })
}
