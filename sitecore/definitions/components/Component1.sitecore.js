import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'Component1',
    displayName: 'Component1',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    contentResolver: '',
    fields: [
      {
        name: 'components["tg-promo-banners"].response[1].images[0]._metadata.uid',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'cs1b0ea12787740025',
      },
    ],
  })
}
