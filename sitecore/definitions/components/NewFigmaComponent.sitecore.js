import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'NewFigmaComponent',
    displayName: 'NewFigmaComponent',
    contentResolver: '',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    fields: [
      {
        name: 'src',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/TechGuilds%20Consulting%20Inc._60d5efadff0a5060c3aaa66d/assets/-jr2efm5XQZMpytnf1du8.png"}',
      },
      {
        name: 'alt',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'GlenOaksFuneralHome139550855',
      },
      {
        name: 'text',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Glen Oaks Funeral Home & Cemetery',
      },
      {
        name: 'text1',
        type: CommonFieldTypes.SingleLineText,
        standardValue: '7541 Hwy #50, Woodbridge Ontario, L4H 4W7',
      },
      {
        name: 'value',
        type: CommonFieldTypes.RichText,
        standardValue:
          '<span style="font-size: 14px; \nfont-family: Helvetica Neue; \nfont-style: normal; \nfont-weight: 400; \nfont-stretch: normal; \ncolor: rgba(87, 87, 87, 1); \nwidth: 404px; \nheight: auto; \ntext-align: left; \nline-height: 165.9999966621399%; \nalign-self: auto; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n"><span >Funeral · Cremation  </span><br /><span >Garden · Chapel Room · Parking</span></span>',
      },
      {
        name: 'src1',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/TechGuilds%20Consulting%20Inc._60d5efadff0a5060c3aaa66d/assets/JcoqRukyqKyy5hluCrRP6.svg"}',
      },
      {
        name: 'alt1',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'GroupI13955086529977',
      },
      {
        name: 'text2',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Call',
      },
      {
        name: 'src2',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/TechGuilds%20Consulting%20Inc._60d5efadff0a5060c3aaa66d/assets/5DsZKw5FwHQgLZmD38LJR.svg"}',
      },
      {
        name: 'alt2',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'GroupI13955086724587',
      },
      {
        name: 'src3',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/TechGuilds%20Consulting%20Inc._60d5efadff0a5060c3aaa66d/assets/crZAk3llxf-XNUSUVNd7d.svg"}',
      },
      {
        name: 'alt3',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'GroupI139550870113046055',
      },
      {
        name: 'text3',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Book Appointment',
      },
      {
        name: 'src4',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/TechGuilds%20Consulting%20Inc._60d5efadff0a5060c3aaa66d/assets/2I3nX2gYESFJ6r8H1xHAq.svg"}',
      },
      {
        name: 'alt4',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'GroupI13955087224587',
      },
      {
        name: 'text4',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Visit Website',
      },
      {
        name: 'src5',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/TechGuilds%20Consulting%20Inc._60d5efadff0a5060c3aaa66d/assets/Ec870Cb69404BgzGhhxio.svg"}',
      },
      {
        name: 'alt5',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Group139550877',
      },
      {
        name: 'src6',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/TechGuilds%20Consulting%20Inc._60d5efadff0a5060c3aaa66d/assets/tjVcEQGzFN-qIgoLcUGGN.svg"}',
      },
      {
        name: 'alt6',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Group139550880',
      },
      {
        name: 'src7',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/TechGuilds%20Consulting%20Inc._60d5efadff0a5060c3aaa66d/assets/zcbuzyVky1t1wts7lYCkl.svg"}',
      },
      {
        name: 'alt7',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Group139550883',
      },
      {
        name: 'alt8',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Lineseperator139550886',
      },
      {
        name: 'src8',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/TechGuilds%20Consulting%20Inc._60d5efadff0a5060c3aaa66d/assets/oIhmUxUDnUe7e2wxKQjlm.svg"}',
      },
    ],
  })
}
