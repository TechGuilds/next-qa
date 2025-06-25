import { SitecoreIcon } from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addTemplate({
    name: 'PageTemplate',
    displayName: 'PageTemplate',
    icon: SitecoreIcon.DocumentTag,
    inherits: ['App Route'],
    fields: [
      {
        name: 'Browser Title',
        type: 'Single-Line Text',
      },
      {
        name: 'Meta Description',
        type: 'Single-Line Text',
      },
      {
        name: 'Favicon',
        type: 'Image',
      },
      {
        name: 'Canonical Url',
        type: 'Single-Line Text',
      },
      {
        name: 'No Index',
        type: 'Checkbox',
        standardValue: '0',
      },
      {
        name: 'No Follow',
        type: 'Checkbox',
        standardValue: '0',
      },
      {
        name: 'Title',
        type: 'Single-Line Text',
      },
      {
        name: 'Description',
        type: 'Single-Line Text',
      },
      {
        name: 'Image',
        type: 'Image',
      },
    ],
  })
}
