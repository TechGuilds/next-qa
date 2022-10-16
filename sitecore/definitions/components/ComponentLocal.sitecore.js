import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'ComponentLocal',
    displayName: 'ComponentLocal',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    fields: [
      {
        name: 'text12',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Normal',
      },
      {
        name: 'link4',
        type: CommonFieldTypes.GeneralLink,
        standardValue: 'textStatic.com',
      },
      {
        name: 'text15',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'LinkStatic',
      },
      {
        name: 'link6',
        type: CommonFieldTypes.GeneralLink,
        standardValue: 'dynamic.com',
      },
      {
        name: 'href5',
        type: CommonFieldTypes.GeneralLink,
        standardValue: '#',
      },
      {
        name: 'href7',
        type: CommonFieldTypes.GeneralLink,
        standardValue: 'textStatic.com',
      },
      {
        name: 'text18',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'LinkStatic',
      },
      {
        name: 'href9',
        type: CommonFieldTypes.GeneralLink,
        standardValue: 'Dynamic.com',
      },
      {
        name: 'link7',
        type: CommonFieldTypes.GeneralLink,
        standardValue: 'hjhj',
      },
    ],
  })
}
