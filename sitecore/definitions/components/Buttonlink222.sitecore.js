import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'Buttonlink222',
    displayName: 'Buttonlink222',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    contentResolver: '',
    fields: [
      {
        name: 'href',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='Link' linktype='external' url='#' anchor='' target=''/>",
      },
      {
        name: 'link',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='Button' linktype='external' url='#' anchor='' target=''/>",
      },
    ],
  })
}
