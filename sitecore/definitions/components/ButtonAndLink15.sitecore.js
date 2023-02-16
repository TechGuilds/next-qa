import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'ButtonAndLink15',
    displayName: 'ButtonAndLink15',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    fields: [
      {
        name: 'href',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='Link' linktype='external' url='#' anchor='' target=''/>",
      },
      {
        name: 'text1',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Button',
      },
    ],
  })
}
