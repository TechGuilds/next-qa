import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'DifferentorPanel1',
    displayName: 'DifferentorPanel1',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    contentResolver: '',
    fields: [
      {
        name: 'text',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'It’s time for some straight answers.',
      },
      {
        name: 'value',
        type: CommonFieldTypes.RichText,
        standardValue:
          '<div data-kajoo-element-type="rich-text">\n<p style="margin-right: 0px; margin-bottom: 0.8em; margin-left: 0px; line-height: 1.8;">Will I be in charge of my day? Can I eat what, and when, I want? &nbsp;Will I have to move if I need extra care? Moving to senior living is a big decision. If you’re not asking questions like these, maybe you should be. Ask us. You’ll get the straightforward answers you’re looking for.</p>\n<p style="margin: 0px 0px 0.8em; line-height: 1.8;">You have questions. Here are others to consider.</p>\n</div>',
      },
      {
        name: 'href',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='BOOK A TOUR' linktype='external' url='https://www.amica.ca/book-a-visit' anchor='' target=''/>",
      },
      {
        name: 'text1',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'BOOK A TOUR',
      },
      {
        name: 'text2',
        type: CommonFieldTypes.SingleLineText,
        standardValue: ' ',
      },
      {
        name: 'src',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://stage-xm-102cm.kajoo.ai/-/media/Amica/Differentiator_panel_desktop-Occ_SenWoman760x546.ashx?h=546&iar=0&w=760&hash=D261DB2400CE3EB79E78982045D6500B"}',
      },
      {
        name: 'alt',
        type: CommonFieldTypes.SingleLineText,
      },
    ],
  })
}
