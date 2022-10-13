import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'StaticHref',
    displayName: 'StaticHref',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    fields: [
      {
        name: 'link',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='Button' linktype='external' url='ww' anchor='' target=''/>",
      },
    ],
  })
}
