import { SitecoreIcon } from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'Component10',
    displayName: 'Component10',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    contentResolver: '',
    fields: [],
  })
}
