import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'HeroBanner',
    displayName: 'HeroBanner',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main', 'kajoo-main'],
    contentResolver: '',
    fields: [
      {
        name: 'src',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://amica.kajoo.ca/-/media/5980ce8a38934b0fb03bd863311025b4.ashx?db=web&la=en&vs=1&ts=20230913t1600563576"}',
      },
      {
        name: 'text',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Find A Residence',
      },
      {
        name: 'value',
        type: CommonFieldTypes.RichText,
        standardValue:
          '<svg width="41" height="21" xmlns="http://www.w3.org/2000/svg"><path d="M40.094 0L20.5 19.222.906 0 0 .889 20.5 21 41 .889z"></path></svg>',
      },
    ],
  })
}
