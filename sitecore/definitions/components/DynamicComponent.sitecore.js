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
        name: 'href',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='45452' linktype='external' url='#' anchor='' target=''/>",
      },
      {
        name: 'text',
        type: CommonFieldTypes.SingleLineText,
        standardValue: '45452',
      },
      {
        name: 'href1',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='ddd' linktype='external' url='#' anchor='' target=''/>",
      },
      {
        name: 'text1',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'ddd',
      },
      {
        name: 'src1',
        type: CommonFieldTypes.Image,
        standardValue: '{"image-do":"https://"}',
      },
      {
        name: 'alt1',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'default-kajoo-image',
      },
    ],
  })
}
