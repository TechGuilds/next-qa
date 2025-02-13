import { SitecoreIcon } from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'Component9',
    displayName: 'Component9',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    contentResolver: '',
    fields: [],
  })
}
