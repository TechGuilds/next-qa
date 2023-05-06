import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'Component',
    displayName: 'Component',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    contentResolver: '',
    fields: [
      {
        name: 'components["tg-promo-banners-formatted"].response.tg_response[0].Product_ID',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'macbook-pro-14',
      },
    ],
  })
}
