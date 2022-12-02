import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: '0NewsletterBanner1Component2',
    displayName: '0NewsletterBanner1Component2',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    fields: [
      {
        name: 'text',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Stay up to date with NWMO',
      },
      {
        name: 'text1',
        type: CommonFieldTypes.SingleLineText,
        standardValue:
          'Join our newsletters to stay up to date on news and events.',
      },
      {
        name: 'text2',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Enter your ... ',
      },
      {
        name: 'text3',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Enter your ...',
      },
      {
        name: 'text4',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Enter your email',
      },
      {
        name: 'text5',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Subscribe',
      },
      {
        name: 'text6',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Choose newsletters to subscribe to:',
      },
      {
        name: 'src',
        type: CommonFieldTypes.Image,
        standardValue:
          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTE5IDNINUMzLjg5IDMgMyAzLjkgMyA1VjE5QzMgMjAuMSAzLjg5IDIxIDUgMjFIMTlDMjAuMTEgMjEgMjEgMjAuMSAyMSAxOVY1QzIxIDMuOSAyMC4xMSAzIDE5IDNaTTEwIDE3TDUgMTJMNi40MSAxMC41OUwxMCAxNC4xN0wxNy41OSA2LjU4TDE5IDhMMTAgMTdaJyBmaWxsPSd3aGl0ZScvPgo8L3N2Zz4K',
      },
      {
        name: 'alt',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'CheckBoxFilled1244745204',
      },
      {
        name: 'text7',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'All',
      },
      {
        name: 'src1',
        type: CommonFieldTypes.Image,
        standardValue:
          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTE5IDVWMTlINVY1SDE5Wk0xOSAzSDVDMy45IDMgMyAzLjkgMyA1VjE5QzMgMjAuMSAzLjkgMjEgNSAyMUgxOUMyMC4xIDIxIDIxIDIwLjEgMjEgMTlWNUMyMSAzLjkgMjAuMSAzIDE5IDNaJyBmaWxsPSd3aGl0ZScvPgo8L3N2Zz4K',
      },
      {
        name: 'alt1',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'CheckBoxOutlineBlankFilled1244745207',
      },
      {
        name: 'text8',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Lorem ipsum',
      },
      {
        name: 'src2',
        type: CommonFieldTypes.Image,
        standardValue:
          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTE5IDVWMTlINVY1SDE5Wk0xOSAzSDVDMy45IDMgMyAzLjkgMyA1VjE5QzMgMjAuMSAzLjkgMjEgNSAyMUgxOUMyMC4xIDIxIDIxIDIwLjEgMjEgMTlWNUMyMSAzLjkgMjAuMSAzIDE5IDNaJyBmaWxsPSd3aGl0ZScvPgo8L3N2Zz4K',
      },
      {
        name: 'alt2',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'CheckBoxOutlineBlankFilled1244745210',
      },
      {
        name: 'text9',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Lorem ipsum',
      },
      {
        name: 'src3',
        type: CommonFieldTypes.Image,
        standardValue:
          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTE5IDVWMTlINVY1SDE5Wk0xOSAzSDVDMy45IDMgMyAzLjkgMyA1VjE5QzMgMjAuMSAzLjkgMjEgNSAyMUgxOUMyMC4xIDIxIDIxIDIwLjEgMjEgMTlWNUMyMSAzLjkgMjAuMSAzIDE5IDNaJyBmaWxsPSd3aGl0ZScvPgo8L3N2Zz4K',
      },
      {
        name: 'alt3',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'CheckBoxOutlineBlankFilled1244745213',
      },
      {
        name: 'text10',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Lorem ipsum',
      },
      {
        name: 'src4',
        type: CommonFieldTypes.Image,
        standardValue:
          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTE5IDVWMTlINVY1SDE5Wk0xOSAzSDVDMy45IDMgMyAzLjkgMyA1VjE5QzMgMjAuMSAzLjkgMjEgNSAyMUgxOUMyMC4xIDIxIDIxIDIwLjEgMjEgMTlWNUMyMSAzLjkgMjAuMSAzIDE5IDNaJyBmaWxsPSd3aGl0ZScvPgo8L3N2Zz4K',
      },
      {
        name: 'alt4',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'CheckBoxOutlineBlankFilled1244745217',
      },
      {
        name: 'text11',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Lorem ipsum',
      },
      {
        name: 'value',
        type: CommonFieldTypes.RichText,
        standardValue:
          '<span style="color: rgba(255, 255, 255, 1); \nwidth: 481px; \nheight: auto; \nfont-weight: 400; \nfont-family: Helvetica Neue LT Std; \ntext-align: left; \nline-height: 18px; \nfont-size: 12px; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: stretch; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n"><span style="color: rgba(255, 255, 255, 1); \nwidth: 481px; \nheight: auto; \nfont-weight: 400; \ntext-align: left; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: stretch; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n">By subscribing you agree to with our </span><span style="color: rgba(255, 255, 255, 1); \nwidth: 481px; \nheight: auto; \nfont-weight: 400; \ntext-align: left; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: stretch; \nflex-grow: 0; \nposition: ; \ntext-decoration: underline; \n">Privacy Policy</span><span style="color: rgba(255, 255, 255, 1); \nwidth: 481px; \nheight: auto; \nfont-weight: 400; \ntext-align: left; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: stretch; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n"> and provide consent to receive updates from us.</span></span>',
      },
    ],
  })
}
