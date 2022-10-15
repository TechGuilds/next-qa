import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'StaticTexts',
    displayName: 'StaticTexts',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    fields: [
      {
        name: 'href4',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='Link' linktype='external' url='#ww' anchor='' target=''/>",
      },
    ],
  })
}
