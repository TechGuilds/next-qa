import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'TestComponentLinkBtn',
    displayName: 'TestComponentLinkBtn',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    fields: [
      {
        name: 'href',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='testllink' linktype='external' url='#ds' anchor='' target=''/>",
      },
      {
        name: 'text1',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Buttonteext',
      },
      {
        name: 'link',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link  linktype='external' url='www.fdff.com' anchor='' target='' />",
      },
    ],
  })
}
