import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'NewFigma',
    displayName: 'NewFigma',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    fields: [
      {
        name: 'bgImage',
        type: CommonFieldTypes.Image,
      },
      {
        name: 'text',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Find us here',
      },
      {
        name: 'value1',
        type: CommonFieldTypes.RichText,
        standardValue:
          '<span style="font-size: 18px; \nfont-family: Roboto; \nfont-style: normal; \nfont-weight: 500; \nfont-stretch: normal; \ncolor: rgba(255, 255, 255, 1); \nwidth: ; \nheight: auto; \ntext-align: left; \nline-height: 28px; \nalign-self: auto; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n"><span >engage@techguilds.com</span><br /><span >+1  877 317 4118 (toll free)</span><br /><span >+1  647 317 4118</span></span>',
      },
      {
        name: 'value',
        type: CommonFieldTypes.RichText,
        standardValue:
          '<span style="font-size: 18px; \nfont-family: Roboto; \nfont-style: normal; \nfont-weight: 500; \nfont-stretch: normal; \ncolor: rgba(255, 255, 255, 1); \nwidth: ; \nheight: auto; \ntext-align: left; \nline-height: 28px; \nalign-self: auto; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n"><span >5353 Dundas St. W. #510</span><br /><span >Toronto, ON M9B-6H8</span><br /><span >Canada</span></span>',
      },
    ],
  })
}
