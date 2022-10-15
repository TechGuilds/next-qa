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
        standardValue: 'Line1128614911',
      },
      {
        name: 'src',
        type: CommonFieldTypes.Image,
        standardValue:
          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTAzMicgaGVpZ2h0PScyJyB2aWV3Qm94PScwIDAgMTAzMiAyJyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPgo8bGluZSBvcGFjaXR5PScwLjInIHgxPSc0LjM3MTE0ZS0wOCcgeTE9JzAuNjg3NScgeDI9JzEwMzInIHkyPScwLjY4NzU5JyBzdHJva2U9JyM2RTZFNzMnLz4KPC9zdmc+Cg==',
      },
      {
        name: 'text',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Shop and Learn',
      },
      {
        name: 'value',
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
        name: 'value1',
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
        name: 'value2',
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
        name: 'value3',
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
        name: 'value4',
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
        name: 'value5',
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
        name: 'value6',
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
        name: 'value7',
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
        name: 'value8',
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
        name: 'value9',
        type: CommonFieldTypes.RichText,
        standardValue:
          '<span style="color: rgba(66, 66, 69, 1); \nwidth: ; \nheight: auto; \nfont-weight: 400; \nfont-family: SF Pro Text; \ntext-align: left; \nline-height: 28px; \nfont-size: 12px; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: auto; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n"><span >Newsroom</span><br /><span >Apple Leadership</span><br /><span >Career Opportunities</span><br /><span >Investors</span><br /><span >Ethics & Compliance</span><br /><span >Events</span><br /><span >Contact Apple</span></span>',
      },
      {
        name: 'value10',
        type: CommonFieldTypes.RichText,
        standardValue:
          '<span style="color: rgba(66, 66, 69, 1); \nwidth: ; \nheight: auto; \nfont-weight: 400; \nfont-family: SF Pro Text; \ntext-align: left; \nline-height: 16px; \nfont-size: 10px; \nfont-style: normal; \nfont-stretch: normal; \nmargin-left: 0; \nmargin-right: 0; \nmargin-top: 0; \nmargin-bottom: 18px; \nalign-self: auto; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n"><span style="color: rgba(66, 66, 69, 1); \nwidth: ; \nheight: auto; \nfont-weight: 400; \ntext-align: left; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: auto; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n">More ways to shop:</span><span style="color: rgba(0, 102, 204, 1); \nwidth: ; \nheight: auto; \nfont-weight: 400; \ntext-align: left; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: auto; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n"> Find an Apple Store</span><span style="color: rgba(66, 66, 69, 1); \nwidth: ; \nheight: auto; \nfont-weight: 400; \ntext-align: left; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: auto; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n"> or</span><span style="color: rgba(0, 102, 204, 1); \nwidth: ; \nheight: auto; \nfont-weight: 400; \ntext-align: left; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: auto; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n"> other retailer </span><span style="color: rgba(66, 66, 69, 1); \nwidth: ; \nheight: auto; \nfont-weight: 400; \ntext-align: left; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: auto; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n">near you. Or call 1-800-MY-APPLE.</span></span>',
      },
      {
        name: 'alt1',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Line2128614912',
      },
      {
        name: 'src1',
        type: CommonFieldTypes.Image,
        standardValue:
          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTAzMicgaGVpZ2h0PScyJyB2aWV3Qm94PScwIDAgMTAzMiAyJyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPgo8bGluZSBvcGFjaXR5PScwLjInIHkxPScwLjY4NzUnIHgyPScxMDMyJyB5Mj0nMC42ODc1JyBzdHJva2U9JyM2RTZFNzMnLz4KPC9zdmc+Cg==',
      },
      {
        name: 'text10',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Privacy Policy',
      },
      {
        name: 'alt2',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Line3128614961',
      },
      {
        name: 'src2',
        type: CommonFieldTypes.Image,
        standardValue:
          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMScgaGVpZ2h0PScxNycgdmlld0JveD0nMCAwIDEgMTcnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxsaW5lIG9wYWNpdHk9JzAuMicgeDE9JzAuNzUnIHkxPScwLjE4NzUnIHgyPScwLjc0OTk5OScgeTI9JzE2LjE4NzUnIHN0cm9rZT0nIzZFNkU3Mycgc3Ryb2tlLXdpZHRoPScwLjUnLz4KPC9zdmc+Cg==',
      },
      {
        name: 'text11',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Terms of Use',
      },
      {
        name: 'alt3',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Line3128614964',
      },
      {
        name: 'src3',
        type: CommonFieldTypes.Image,
        standardValue:
          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMScgaGVpZ2h0PScxNycgdmlld0JveD0nMCAwIDEgMTcnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxsaW5lIG9wYWNpdHk9JzAuMicgeDE9JzAuNzUnIHkxPScwLjE4NzUnIHgyPScwLjc0OTk5OScgeTI9JzE2LjE4NzUnIHN0cm9rZT0nIzZFNkU3Mycgc3Ryb2tlLXdpZHRoPScwLjUnLz4KPC9zdmc+Cg==',
      },
      {
        name: 'text12',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Sales and Refunds',
      },
      {
        name: 'alt4',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Line3128614967',
      },
      {
        name: 'src4',
        type: CommonFieldTypes.Image,
        standardValue:
          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMScgaGVpZ2h0PScxNycgdmlld0JveD0nMCAwIDEgMTcnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxsaW5lIG9wYWNpdHk9JzAuMicgeDE9JzAuNzUnIHkxPScwLjE4NzUnIHgyPScwLjc0OTk5OScgeTI9JzE2LjE4NzUnIHN0cm9rZT0nIzZFNkU3Mycgc3Ryb2tlLXdpZHRoPScwLjUnLz4KPC9zdmc+Cg==',
      },
      {
        name: 'text13',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Legal',
      },
      {
        name: 'alt5',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Line3128614970',
      },
      {
        name: 'src5',
        type: CommonFieldTypes.Image,
        standardValue:
          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMScgaGVpZ2h0PScxNycgdmlld0JveD0nMCAwIDEgMTcnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxsaW5lIG9wYWNpdHk9JzAuMicgeDE9JzAuNzUnIHkxPScwLjE4NzUnIHgyPScwLjc0OTk5OScgeTI9JzE2LjE4NzUnIHN0cm9rZT0nIzZFNkU3Mycgc3Ryb2tlLXdpZHRoPScwLjUnLz4KPC9zdmc+Cg==',
      },
      {
        name: 'text14',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Site Map',
      },
      {
        name: 'alt6',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Line3128614973',
      },
      {
        name: 'src6',
        type: CommonFieldTypes.Image,
        standardValue:
          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMScgaGVpZ2h0PScxNycgdmlld0JveD0nMCAwIDEgMTcnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxsaW5lIG9wYWNpdHk9JzAuMicgeDE9JzAuNzUnIHkxPScwLjE4NzUnIHgyPScwLjc0OTk5OScgeTI9JzE2LjE4NzUnIHN0cm9rZT0nIzZFNkU3Mycgc3Ryb2tlLXdpZHRoPScwLjUnLz4KPC9zdmc+Cg==',
      },
    ],
  })
}
