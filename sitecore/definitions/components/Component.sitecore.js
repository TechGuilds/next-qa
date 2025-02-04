import { SitecoreIcon } from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'Component',
    displayName: 'Component',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    contentResolver: '',
    fields: [
      {
        name: 'Text',
        type: 'Single-Line Text',
        standardValue: 'Lorem Ipsum',
      },
      {
        name: 'Image',
        type: 'Image',
        standardValue: 'https://app.kajoo.ai/icons/default-imag.svg',
      },
      {
        name: 'Link',
        type: 'General Link',
        standardValue:
          "<link text='Link' linktype='external' url='#' anchor='' target=''/>",
      },
      {
        name: 'Rich Text',
        type: 'Rich Text',
        standardValue: '<p>Lorem Ipsum</p>',
      },
    ],
  })
}
