import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'Component',
    displayName: 'Component',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    contentResolver: '',
    fields: [
      {
        name: 'href',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='ddd' linktype='external' url='#' anchor='' target=''/>",
      },
      {
        name: 'text',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'ddd',
      },
      {
        name: 'text1',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'fffffdf',
      },
      {
        name: 'href1',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='sfdfdfdkfhdsg' linktype='external' url='#' anchor='' target=''/>",
      },
      {
        name: 'text2',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'sfdfdfdkfhdsg',
      },
    ],
  })
}
