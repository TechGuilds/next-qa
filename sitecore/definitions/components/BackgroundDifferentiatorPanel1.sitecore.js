import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'BackgroundDifferentiatorPanel1',
    displayName: 'BackgroundDifferentiatorPanel1',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    contentResolver: '',
    fields: [
      {
        name: 'text',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Webinars for seniors',
      },
      {
        name: 'value',
        type: CommonFieldTypes.RichText,
        standardValue:
          '<div data-kajoo-element-type="rich-text">Get expert&nbsp;tips and ideas for better sleep, enhanced memory, managing stress, downsizing and more in our new online workshops.</div>',
      },
      {
        name: 'href',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='WATCH NOW' linktype='external' url='https://www.amica.ca/webinars' anchor='' target=''/>",
      },
      {
        name: 'text1',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'WATCH NOW',
      },
      {
        name: 'text2',
        type: CommonFieldTypes.SingleLineText,
        standardValue: ' ',
      },
    ],
  })
}
