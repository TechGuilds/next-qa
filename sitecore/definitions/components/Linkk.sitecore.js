import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'Linkk',
    displayName: 'Linkk',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    fields: [
      {
        name: 'href2',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='LinkText' linktype='external' url='www.Link.com' anchor='' target=''/>",
      },
    ],
  })
}
