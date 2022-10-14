import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'AppleFooter',
    displayName: 'AppleFooter',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    fields: [
      {
        name: 'alt',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Line1163982',
      },
      {
        name: 'src',
        type: CommonFieldTypes.Image,
        standardValue:
          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTAzMicgaGVpZ2h0PScyJyB2aWV3Qm94PScwIDAgMTAzMiAyJyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPgo8bGluZSBvcGFjaXR5PScwLjInIHgxPSc0LjM3MTE0ZS0wOCcgeTE9JzAuNTcxMjg5JyB4Mj0nMTAzMicgeTI9JzAuNTcxMzc5JyBzdHJva2U9JyM2RTZFNzMnLz4KPC9zdmc+Cg==',
      },
      {
        name: 'text',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Shop and Learn',
      },
      {
        name: 'value1',
        type: CommonFieldTypes.RichText,
        standardValue:
          '<span style="color: rgba(66, 66, 69, 1); \nwidth: ; \nheight: auto; \nfont-weight: 400; \nfont-family: SF Pro Text; \ntext-align: left; \nline-height: 28px; \nfont-size: 12px; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: auto; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n"><span >Store</span><br /><span >Mac</span><br /><span >iPad</span><br /><span >iPhone</span><br /><span >Watch</span><br /><span >AirPods</span><br /><span >TV & Home</span><br /><span >AirTag</span><br /><span >Accessories</span><br /><span >Gift Cards</span></span>',
      },
      {
        name: 'text1',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Services',
      },
      {
        name: 'value2',
        type: CommonFieldTypes.RichText,
        standardValue:
          '<span style="color: rgba(66, 66, 69, 1); \nwidth: ; \nheight: auto; \nfont-weight: 400; \nfont-family: SF Pro Text; \ntext-align: left; \nline-height: 28px; \nfont-size: 12px; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: auto; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n"><span >Apple Music</span><br /><span >Apple TV+</span><br /><span >Apple Fitness+</span><br /><span >Apple News+</span><br /><span >Apple Arcade</span><br /><span >iCloud</span><br /><span >Apple One</span><br /><span >Apple Card</span><br /><span >Apple Books</span><br /><span >Apple Podcasts</span><br /><span >App Store</span></span>',
      },
      {
        name: 'text2',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Account',
      },
      {
        name: 'value3',
        type: CommonFieldTypes.RichText,
        standardValue:
          '<span style="color: rgba(66, 66, 69, 1); \nwidth: ; \nheight: auto; \nfont-weight: 400; \nfont-family: SF Pro Text; \ntext-align: left; \nline-height: 28px; \nfont-size: 12px; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: auto; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n"><span >Manage Your Apple ID</span><br /><span >Apple Store Account</span><br /><span >iCloud.com</span></span>',
      },
      {
        name: 'text3',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Apple Store',
      },
      {
        name: 'value4',
        type: CommonFieldTypes.RichText,
        standardValue:
          '<span style="color: rgba(66, 66, 69, 1); \nwidth: ; \nheight: auto; \nfont-weight: 400; \nfont-family: SF Pro Text; \ntext-align: left; \nline-height: 28px; \nfont-size: 12px; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: auto; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n"><span >Find a Store</span><br /><span >Genius Bar</span><br /><span >Today at Apple</span><br /><span >Apple Camp</span><br /><span >Apple Store App</span><br /><span >Refurbished and Clearance</span><br /><span >Financing</span><br /><span >Apple Trade In</span><br /><span >Order Status</span><br /><span >Shopping Help</span></span>',
      },
      {
        name: 'text4',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'For Business',
      },
      {
        name: 'value5',
        type: CommonFieldTypes.RichText,
        standardValue:
          '<span style="color: rgba(66, 66, 69, 1); \nwidth: ; \nheight: auto; \nfont-weight: 400; \nfont-family: SF Pro Text; \ntext-align: left; \nline-height: 28px; \nfont-size: 12px; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: auto; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n"><span >Apple and Business</span><br /><span >Shop for Business</span></span>',
      },
      {
        name: 'text5',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'For Education',
      },
      {
        name: 'value6',
        type: CommonFieldTypes.RichText,
        standardValue:
          '<span style="color: rgba(66, 66, 69, 1); \nwidth: ; \nheight: auto; \nfont-weight: 400; \nfont-family: SF Pro Text; \ntext-align: left; \nline-height: 28px; \nfont-size: 12px; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: auto; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n"><span >Apple and Education</span><br /><span >Shop for K-12</span><br /><span >Shop for College</span></span>',
      },
      {
        name: 'text6',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'For Healthcare',
      },
      {
        name: 'value7',
        type: CommonFieldTypes.RichText,
        standardValue:
          '<span style="color: rgba(66, 66, 69, 1); \nwidth: ; \nheight: auto; \nfont-weight: 400; \nfont-family: SF Pro Text; \ntext-align: left; \nline-height: 28px; \nfont-size: 12px; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: auto; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n"><span >Apple in Healthcare</span><br /><span >Health on Apple Watch</span><br /><span >Health Records on iPhone</span></span>',
      },
      {
        name: 'text7',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'For Government',
      },
      {
        name: 'value8',
        type: CommonFieldTypes.RichText,
        standardValue:
          '<span style="color: rgba(66, 66, 69, 1); \nwidth: ; \nheight: auto; \nfont-weight: 400; \nfont-family: SF Pro Text; \ntext-align: left; \nline-height: 28px; \nfont-size: 12px; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: auto; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n"><span >Shop for Government</span><br /><span >Shop for Veterans and Military</span></span>',
      },
      {
        name: 'text8',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'For Business',
      },
      {
        name: 'value9',
        type: CommonFieldTypes.RichText,
        standardValue:
          '<span style="color: rgba(66, 66, 69, 1); \nwidth: ; \nheight: auto; \nfont-weight: 400; \nfont-family: SF Pro Text; \ntext-align: left; \nline-height: 28px; \nfont-size: 12px; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: auto; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n"><span >Accessibility</span><br /><span >Education</span><br /><span >Environment</span><br /><span >Inclusion and Diversity</span><br /><span >Privacy</span><br /><span >Racial Equity and Justice</span><br /><span >Supplier Responsibility</span></span>',
      },
      {
        name: 'text9',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'About Apple',
      },
      {
        name: 'value10',
        type: CommonFieldTypes.RichText,
        standardValue:
          '<span style="color: rgba(66, 66, 69, 1); \nwidth: ; \nheight: auto; \nfont-weight: 400; \nfont-family: SF Pro Text; \ntext-align: left; \nline-height: 28px; \nfont-size: 12px; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: auto; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n"><span >Newsroom</span><br /><span >Apple Leadership</span><br /><span >Career Opportunities</span><br /><span >Investors</span><br /><span >Ethics & Compliance</span><br /><span >Events</span><br /><span >Contact Apple</span></span>',
      },
    ],
  })
}
