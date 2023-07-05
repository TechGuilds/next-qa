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
        name: 'fields.text3',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Heading',
      },
      {
        name: 'fields.href1',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='undefined' linktype='external' url='#' anchor='' target=''/>",
      },
      {
        name: 'fields.src1',
        type: CommonFieldTypes.Image,
        standardValue: '/icons/default-imag.svg',
      },
      {
        name: 'fields.alt1',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'default-kajoo-imag',
      },
      {
        name: 'fields.text5',
        type: CommonFieldTypes.SingleLineText,
        standardValue:
          'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
      },
      {
        name: 'fields.href',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='undefined' linktype='external' url='#' anchor='' target=''/>",
      },
      {
        name: 'fields.text6',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Heading',
      },
      {
        name: 'fields.text4',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Heading',
      },
    ],
  })
}
