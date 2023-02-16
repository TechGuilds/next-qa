import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'Link1',
    displayName: 'Link1',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    fields: [
      {
        name: 'href2',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='dffdf' linktype='external' url='gfgf' anchor='' target=''/>",
      },
    ],
  })
}
