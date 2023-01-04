import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'Arb',
    displayName: 'Arb',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    fields: [
      {
        name: 'text',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Reflective',
      },
      {
        name: 'value',
        type: CommonFieldTypes.RichText,
        standardValue:
          '<span style="font-size: 14px; \nfont-family: Helvetica Neue; \nfont-style: normal; \nfont-weight: 400; \nfont-stretch: normal; \ncolor: rgba(87, 87, 87, 1); \nwidth: 321px; \nheight: auto; \ntext-align: left; \nline-height: 165.9999966621399%; \nalign-self: auto; \nflex-grow: 0; \nposition: absolute; \ntop: 50px; \nleft: 58px; \ntext-decoration: none; \n"><span >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span><br /><span /></span>',
      },
      {
        name: 'src',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/TechGuilds%20Consulting%20Inc._60d5efadff0a5060c3aaa66d/components/6iW1ST43kNVjLGMiWMuOr.png"}',
      },
      {
        name: 'alt',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'image113I133344021133342971',
      },
      {
        name: 'alt1',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'radiobuttonI133344021133342974130843301',
      },
      {
        name: 'src1',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/TechGuilds%20Consulting%20Inc._60d5efadff0a5060c3aaa66d/components/xQtpksgRD3wMoGZE4Eyiu.svg"}',
      },
    ],
  })
}
