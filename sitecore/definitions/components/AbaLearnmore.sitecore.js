import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'AbaLearnmore',
    displayName: 'AbaLearnmore',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    fields: [
      {
        name: 'text3',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Learn more about the issue.',
      },
      {
        name: 'text19',
        type: CommonFieldTypes.SingleLineText,
        standardValue:
          'Large credit unions have lost their way. It’s time to level the playing field and hold them accountable.',
      },
      {
        name: 'src',
        type: CommonFieldTypes.Image,
        standardValue:
          'https://www.reformcreditunions.com/wp-content/uploads/2021/08/tax-icon2.svg',
      },
      {
        name: 'alt',
        type: CommonFieldTypes.SingleLineText,
      },
      {
        name: 'value1',
        type: CommonFieldTypes.RichText,
        standardValue:
          '<span style="box-sizing: border-box; \ncolor: rgb(27, 75, 110); \nfont-family: "Nunito Sans", sans-serif; \nfont-size: 24px; \nheight: 26.3906px; \nline-height: 26.4px; \nmargin-block-end: 10px; \nmargin-block-start: 20px; \nmargin-bottom: 10px; \nmargin-top: 20px; \ntext-align: left; \ntext-decoration-color: rgb(27, 75, 110); \nwidth: 312.188px; \n"><span style="box-sizing: border-box; \ncolor: rgb(27, 75, 110); \nfill: rgb(10, 12, 12); \nfont-family: "Nunito Sans", sans-serif; \nfont-size: 24px; \nfont-weight: 700; \nline-height: 26.4px; \ntext-align: left; \ntext-decoration-color: transparent; \ntext-decoration-line: none; \n">Cost to Taxpayers</span></span>',
      },
      {
        name: 'text25',
        type: CommonFieldTypes.SingleLineText,
        standardValue:
          'Credit unions pay no federal income taxes, leaving the rest of us to pick up the bill for their $2 trillion industry.',
      },
      {
        name: 'src1',
        type: CommonFieldTypes.Image,
        standardValue:
          'https://www.reformcreditunions.com/wp-content/uploads/2021/07/abandoned-mission.svg',
      },
      {
        name: 'alt1',
        type: CommonFieldTypes.SingleLineText,
      },
      {
        name: 'value3',
        type: CommonFieldTypes.RichText,
        standardValue:
          '<span style="box-sizing: border-box; \ncolor: rgb(27, 75, 110); \nfont-family: "Nunito Sans", sans-serif; \nfont-size: 24px; \nheight: 26.3906px; \nline-height: 26.4px; \nmargin-block-end: 10px; \nmargin-block-start: 20px; \nmargin-bottom: 10px; \nmargin-top: 20px; \ntext-align: left; \ntext-decoration-color: rgb(27, 75, 110); \nwidth: 312.188px; \n"><span style="box-sizing: border-box; \ncolor: rgb(27, 75, 110); \nfill: rgb(10, 12, 12); \nfont-family: "Nunito Sans", sans-serif; \nfont-size: 24px; \nfont-weight: 700; \nline-height: 26.4px; \ntext-align: left; \ntext-decoration-color: transparent; \ntext-decoration-line: none; \n">Abandoned Mission</span></span>',
      },
      {
        name: 'text31',
        type: CommonFieldTypes.SingleLineText,
        standardValue:
          'Credit unions were formed during the Great Depression to help the underserved access credit. That mission is long gone.',
      },
      {
        name: 'src2',
        type: CommonFieldTypes.Image,
        standardValue:
          'https://www.reformcreditunions.com/wp-content/uploads/2021/07/unwarranted-advantage.svg',
      },
      {
        name: 'alt2',
        type: CommonFieldTypes.SingleLineText,
      },
      {
        name: 'value5',
        type: CommonFieldTypes.RichText,
        standardValue:
          '<span style="box-sizing: border-box; \ncolor: rgb(27, 75, 110); \nfont-family: "Nunito Sans", sans-serif; \nfont-size: 24px; \nheight: 26.3906px; \nline-height: 26.4px; \nmargin-block-end: 10px; \nmargin-block-start: 20px; \nmargin-bottom: 10px; \nmargin-top: 20px; \ntext-align: left; \ntext-decoration-color: rgb(27, 75, 110); \nwidth: 312.188px; \n"><span style="box-sizing: border-box; \ncolor: rgb(27, 75, 110); \nfill: rgb(10, 12, 12); \nfont-family: "Nunito Sans", sans-serif; \nfont-size: 24px; \nfont-weight: 700; \nline-height: 26.4px; \ntext-align: left; \ntext-decoration-color: transparent; \ntext-decoration-line: none; \n">Unwarranted Advantage</span></span>',
      },
      {
        name: 'text37',
        type: CommonFieldTypes.SingleLineText,
        standardValue:
          "Credit unions exploit their privileged tax status to buy tax-paying banks and expand their market share beyond what's fair.",
      },
      {
        name: 'src3',
        type: CommonFieldTypes.Image,
        standardValue:
          'https://www.reformcreditunions.com/wp-content/uploads/2021/08/tax-icon2.svg',
      },
      {
        name: 'alt3',
        type: CommonFieldTypes.SingleLineText,
      },
      {
        name: 'value7',
        type: CommonFieldTypes.RichText,
        standardValue:
          '<span style="box-sizing: border-box; \ncolor: rgb(27, 75, 110); \nfont-family: "Nunito Sans", sans-serif; \nfont-size: 24px; \nheight: 26.3906px; \nline-height: 26.4px; \nmargin-block-end: 10px; \nmargin-block-start: 20px; \nmargin-bottom: 10px; \nmargin-top: 20px; \ntext-align: left; \ntext-decoration-color: rgb(27, 75, 110); \nwidth: 312.188px; \n"><span style="box-sizing: border-box; \ncolor: rgb(27, 75, 110); \nfill: rgb(10, 12, 12); \nfont-family: "Nunito Sans", sans-serif; \nfont-size: 24px; \nfont-weight: 700; \nline-height: 26.4px; \ntext-align: left; \ntext-decoration-color: transparent; \ntext-decoration-line: none; \n">Lack of Accountability</span></span>',
      },
      {
        name: 'text43',
        type: CommonFieldTypes.SingleLineText,
        standardValue:
          "Credit unions claim they serve the underserved and protect consumers, but how do we know what they're actually doing?",
      },
      {
        name: 'text53',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Recent News &  Insights',
      },
      {
        name: 'text',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Lack of Accountability',
      },
      {
        name: 'value9',
        type: CommonFieldTypes.RichText,
        standardValue:
          '<span style="box-sizing: border-box; \ncolor: rgb(27, 75, 110); \nfont-family: "Nunito Sans", sans-serif; \nfont-size: 20px; \nfont-weight: 600; \n\nline-height: 26px; \nmargin-block-end: 0px; \nmargin-block-start: 0px; \nmargin-bottom: 0px; \nmargin-top: 0px; \ntext-decoration-color: rgb(27, 75, 110); \n\n"><span style="box-sizing: border-box; \ncolor: rgb(27, 75, 110); \nfill: rgb(10, 12, 12); \nfont-family: "Nunito Sans", sans-serif; \nfont-size: 20px; \nfont-weight: 600; \nline-height: 26px; \ntext-decoration-color: transparent; \ntext-decoration-line: none; \n">Federal Reserve Governor: Regulators Should Assess Credit Unions’ “Local Market Power” Before Approving Bank Mergers </span></span>',
      },
      {
        name: 'text84',
        type: CommonFieldTypes.SingleLineText,
        standardValue: '\n\t\t\t\t\t\t\t\t\t\tOctober 12, 2022\t\t\t\t\t',
      },
    ],
  })
}
