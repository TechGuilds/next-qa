import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'CollectionOfLinks',
    displayName: 'CollectionOfLinks',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    fields: [
      {
        name: 'href1',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='Link' linktype='external' url='Link.com' anchor='' target=''/>",
      },
      {
        name: 'text1',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Link',
      },
      {
        name: 'href3',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='Link' linktype='external' url='Link.com' anchor='' target=''/>",
      },
      {
        name: 'text4',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Button',
      },
    ],
  })
}
