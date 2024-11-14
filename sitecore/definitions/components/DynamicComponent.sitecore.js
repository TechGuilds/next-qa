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
        name: 'List',
        type: 'Treelist',
        source:
          'DataSource=/Sitecore/Content&IncludeTemplatesForSelection=DynamicComponentList',
      },
      {
        name: 'Image',
        type: 'Image',
        standardValue: 'https://app.kajoo.ai/icons/default-imag.svg',
      },
    ],
  })
}
