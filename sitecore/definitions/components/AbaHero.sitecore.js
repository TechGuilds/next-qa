import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'AbaHero',
    displayName: 'AbaHero',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    fields: [
      {
        name: 'text2',
        type: CommonFieldTypes.SingleLineText,
        standardValue:
          'Credit union federal income tax exemption will cost the US over $24 billion by 2031. \nAmerican taxpayers are stuck with the bill.',
      },
      {
        name: 'text',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'See the impact in your state.\t\t\t\t\t\t',
      },
      {
        name: 'value',
        type: CommonFieldTypes.RichText,
        standardValue:
          '<iframe src="https://www.google.com/maps/d/embed?mid=1kK4mp4jsia3Wv_D0J5gG-z3fSmU&hl=en_US&ehbc=2E312F" width="100%" height="600px" ></iframe>',
      },
      {
        name: 'href',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='SEE NATIONAL DATA' linktype='external' url='#' anchor='' target=''/>",
      },
    ],
  })
}
