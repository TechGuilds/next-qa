import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'AbaBottom',
    displayName: 'AbaBottom',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    fields: [
      {
        name: 'text6',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Tell Congress it’s time to reform credit unions.',
      },
      {
        name: 'href',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='TAKE ACTION NOW' linktype='external' url='#' anchor='' target=''/>",
      },
    ],
  })
}
