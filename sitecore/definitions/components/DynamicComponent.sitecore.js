import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'DynamicComponent',
    displayName: 'DynamicComponent',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    contentResolver: '',
    fields: [
      {
        name: 'link',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='undefined' linktype='external' url='#' anchor='' target=''/>",
      },
      {
        name: 'href',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='undefined' linktype='external' url='#' anchor='' target=''/>",
      },
    ],
  })
}
