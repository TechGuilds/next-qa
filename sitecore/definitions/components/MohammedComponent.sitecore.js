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
          name: 'text15',
          type: CommonFieldTypes.SingleLineText,
          standardValue: 'LinkStatic',
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
          name: 'href9',
          type: CommonFieldTypes.GeneralLink,
          standardValue: 'Dynamic.com',
        },
  
      ],
    })
  }
  