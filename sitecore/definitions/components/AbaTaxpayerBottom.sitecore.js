import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'AbaTaxpayerBottom',
    displayName: 'AbaTaxpayerBottom',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    fields: [
      {
        name: 'text',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'See the impact on taxes in your state.',
      },
      {
        name: 'href',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='FIND YOUR STATE' linktype='external' url='#' anchor='' target=''/>",
      },
      {
        name: 'text2',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Tell Congress it’s time to reform credit unions.',
      },
      {
        name: 'href1',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='TAKE ACTION NOW' linktype='external' url='#' anchor='' target=''/>",
      },
    ],
  })
}
