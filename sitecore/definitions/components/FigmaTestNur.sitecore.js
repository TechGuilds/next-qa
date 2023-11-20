import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'FigmaTestNur',
    displayName: 'FigmaTestNur',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    contentResolver: '',
    fields: [
      {
        name: 'bgImage',
        type: CommonFieldTypes.Image,
        standardValue:
          'https://kajoo.nyc3.digitaloceanspaces.com/containers/orgs/60d5efadff0a5060c3aaa66d/assets/vS0_Q1Jl1sHax6fYn9kuq.jpeg',
      },
      {
        name: 'src',
        type: CommonFieldTypes.Image,
        standardValue:
          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nNTIwJyBoZWlnaHQ9JzEnIHZpZXdCb3g9JzAgMCA1MjAgMScgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPGxpbmUgeTE9JzAuNScgeDI9JzUyMCcgeTI9JzAuNScgc3Ryb2tlPScjQTBBOUFFJy8+Cjwvc3ZnPgo=',
      },
      {
        name: 'alt',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'borderlineI2219',
      },
      {
        name: 'text',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Environmental and Safety Lorem Ipsum',
      },
      {
        name: 'text1',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Water Safety',
      },
      {
        name: 'src1',
        type: CommonFieldTypes.Image,
        standardValue:
          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTInIGhlaWdodD0nMTInIHZpZXdCb3g9JzAgMCAxMiAxMicgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPGcgY2xpcC1wYXRoPSd1cmwoI2NsaXAwXzI4NTg3XzI3NiknPgo8cGF0aCBkPSdNMyAxMkgwTDMgNkwwIDBIM0w2IDZMMyAxMlonIGZpbGw9JyNCRUQ3M0QnLz4KPHBhdGggZD0nTTkgMTJINkw5IDZMNiAwSDlMMTIgNkw5IDEyWicgZmlsbD0nI0JFRDczRCcvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9J2NsaXAwXzI4NTg3XzI3Nic+CjxyZWN0IHdpZHRoPScxMicgaGVpZ2h0PScxMicgZmlsbD0nd2hpdGUnLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K',
      },
      {
        name: 'alt1',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'NWMOchevronI2219',
      },
      {
        name: 'text2',
        type: CommonFieldTypes.SingleLineText,
        standardValue:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id purus mauris nunc aliquam odio sem consectetur tempor.',
      },
      {
        name: 'text3',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Environmental Safety',
      },
      {
        name: 'src2',
        type: CommonFieldTypes.Image,
        standardValue:
          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTInIGhlaWdodD0nMTInIHZpZXdCb3g9JzAgMCAxMiAxMicgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPGcgY2xpcC1wYXRoPSd1cmwoI2NsaXAwXzI4NTg3XzI4MyknPgo8cGF0aCBkPSdNMyAxMkgwTDMgNkwwIDBIM0w2IDZMMyAxMlonIGZpbGw9JyNCRUQ3M0QnLz4KPHBhdGggZD0nTTkgMTJINkw5IDZMNiAwSDlMMTIgNkw5IDEyWicgZmlsbD0nI0JFRDczRCcvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9J2NsaXAwXzI4NTg3XzI4Myc+CjxyZWN0IHdpZHRoPScxMicgaGVpZ2h0PScxMicgZmlsbD0nd2hpdGUnLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K',
      },
      {
        name: 'alt2',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'NWMOchevronI2219',
      },
      {
        name: 'text4',
        type: CommonFieldTypes.SingleLineText,
        standardValue:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id purus mauris nunc aliquam odio sem consectetur tempor.',
      },
      {
        name: 'text5',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Learn more',
      },
    ],
  })
}
