import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'BackgroundDifferentiatorPanel',
    displayName: 'BackgroundDifferentiatorPanel',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main', 'kajoo-main'],
    contentResolver: '',
    fields: [
      {
        name: 'text',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Webinars for seniors',
      },
      {
        name: 'text1',
        type: CommonFieldTypes.SingleLineText,
        standardValue:
          '\nGet expert tips and ideas for better sleep, enhanced memory, managing stress, downsizing and more in our new online workshops.\n',
      },
      {
        name: 'src',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://amica.kajoo.ca/-/media/310bbf8c62b247f49ee51e2d1f068582.ashx?db=master&la=en&vs=1&ts=20230913t1633522702"}',
      },
      {
        name: 'alt',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Webinars for seniors',
      },
    ],
  })
}
