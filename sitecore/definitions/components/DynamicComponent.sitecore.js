import { SitecoreIcon } from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'DynamicComponent',
    displayName: 'DynamicComponent',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    contentResolver: '',
    fields: [
      {
        name: 'Text new',
        type: 'Single-Line Text',
        standardValue: 'Lorem Ipsum',
      },
      {
        name: 'Image',
        type: 'Image',
        standardValue: 'https://app.kajoo.ai/icons/default-imag.svg',
      },
      {
        name: 'List item',
        type: 'Treelist',
        source:
          'DataSource=/Sitecore/Content&IncludeTemplatesForSelection=DynamicComponentListItem',
      },
      {
        name: 'Link new',
        type: 'General Link',
        standardValue:
          "<link text='Link' linktype='external' url='#' anchor='' target=''/>",
      },
      {
        name: 'Text-hello',
        type: 'Single-Line Text',
        standardValue: 'Lorem Ipsum',
      },
      {
        name: 'Text_hello',
        type: 'Single-Line Text',
        standardValue: 'Lorem Ipsum',
      },
    ],
  })
}
