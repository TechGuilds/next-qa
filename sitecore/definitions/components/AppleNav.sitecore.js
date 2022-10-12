import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'AppleNav',
    displayName: 'AppleNav',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    fields: [
      {
        name: 'src',
        type: CommonFieldTypes.Image,
        standardValue:
          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTQnIGhlaWdodD0nNDQnIHZpZXdCb3g9JzAgMCAxNCA0NCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPGcgY2xpcC1wYXRoPSd1cmwoI2NsaXAwXzEyODZfMTQ3MzYpJz4KPHBhdGggZD0nTTEzLjA3MjYgMTcuNTIxNEMxMi45Nzk2IDE3LjU5MzcgMTEuMzQ3OCAxOC41MTI5IDExLjM0NzggMjAuNTU3OEMxMS4zNDc4IDIyLjkyMjkgMTMuNDIzNyAyMy43NTk1IDEzLjQ4NTcgMjMuNzgwMUMxMy40NzU0IDIzLjgzMTcgMTMuMTU1MiAyNC45MjY1IDEyLjM5MDkgMjYuMDQxOUMxMS43MDkzIDI3LjAyMzEgMTAuOTk2NiAyOC4wMDQyIDkuOTEyMTcgMjguMDA0MkM4LjgyNzc3IDI4LjAwNDIgOC41NDg4NyAyNy4zNzQyIDcuMjk5MTcgMjcuMzc0MkM2LjA4MDQ3IDI3LjM3NDIgNS42NDY2NyAyOC4wMjQ5IDQuNjU1MTcgMjguMDI0OUMzLjY2MzY3IDI4LjAyNDkgMi45NzE2NyAyNy4xMTYgMi4xNzY0NyAyNi4wMDA2QzEuMjU3MjcgMjQuNjg4OSAwLjUxMzY3MiAyMi42NTQzIDAuNTEzNjcyIDIwLjcyM0MwLjUxMzY3MiAxNy42MjQ2IDIuNTI3NjcgMTUuOTgyNCA0LjUxMDU3IDE1Ljk4MjRDNS41NjQwNyAxNS45ODI0IDYuNDQxODcgMTYuNjc0NCA3LjEwMjg3IDE2LjY3NDRDNy43MzI4NyAxNi42NzQ0IDguNzE0MDcgMTUuOTQxMSA5LjkxMjA3IDE1Ljk0MTFDMTAuMzY2NiAxNS45NDEyIDExLjk5ODUgMTUuOTgyNiAxMy4wNzI2IDE3LjUyMTRaTTkuMzQ0MTcgMTQuNjI5NkM5LjgzOTg3IDE0LjA0MDkgMTAuMTkxMSAxMy4yMjUgMTAuMTkxMSAxMi40MDkxQzEwLjE5MTEgMTIuMjk1NSAxMC4xODA4IDEyLjE4MTkgMTAuMTYwMSAxMi4wODg5QzkuMzU0NDcgMTIuMTE5OSA4LjM5Mzk3IDEyLjYyNiA3LjgxNTU3IDEzLjI5NzNDNy4zNjExNyAxMy44MTM3IDYuOTM3NjcgMTQuNjI5NiA2LjkzNzY3IDE1LjQ1NTlDNi45Mzc2NyAxNS41Nzk4IDYuOTU4MzcgMTUuNzAzOCA2Ljk2ODY3IDE1Ljc0NTFDNy4wMjAyNyAxNS43NTU0IDcuMTAyOTcgMTUuNzY1OCA3LjE4NTU3IDE1Ljc2NThDNy45MDg1NyAxNS43NjU3IDguODE3MzcgMTUuMjgwMyA5LjM0NDE3IDE0LjYyOTZaJyBmaWxsPSd3aGl0ZScvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9J2NsaXAwXzEyODZfMTQ3MzYnPgo8cmVjdCB3aWR0aD0nMTQnIGhlaWdodD0nNDQnIGZpbGw9J3doaXRlJy8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==',
      },
      {
        name: 'alt',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'globalnavappleimageb5er5ngrzxqqlarge128614736',
      },
      {
        name: 'text',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Store',
      },
      {
        name: 'text1',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Mac',
      },
      {
        name: 'text2',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'IPad',
      },
      {
        name: 'text3',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'iPhone',
      },
      {
        name: 'text4',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Wacth',
      },
      {
        name: 'text5',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'AirPods',
      },
      {
        name: 'text6',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'TV & Home',
      },
      {
        name: 'text7',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Only on Apple',
      },
      {
        name: 'text8',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Accessories',
      },
      {
        name: 'text9',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Support',
      },
      {
        name: 'src1',
        type: CommonFieldTypes.Image,
        standardValue:
          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTUnIGhlaWdodD0nNDQnIHZpZXdCb3g9JzAgMCAxNSA0NCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTEzLjk3OTcgMjcuNTkzMUwxMC40Nzk3IDI0LjA5MzFDMTEuMzYxNCAyMy4wMTMzIDExLjc5NDUgMjEuNjM2IDExLjY4OTYgMjAuMjQ1OEMxMS41ODQ3IDE4Ljg1NTcgMTAuOTQ5NyAxNy41NTkxIDkuOTE1ODggMTYuNjIzOEM4Ljg4MjA4IDE1LjY4ODYgNy41Mjg0OCAxNS4xODYyIDYuMTM0ODQgMTUuMjIwN0M0Ljc0MTIgMTUuMjU1MSAzLjQxNDA0IDE1LjgyMzYgMi40Mjc2NSAxNi44MDg3QzEuNDQxMjYgMTcuNzkzOCAwLjg3MTA0MyAxOS4xMjAyIDAuODM0ODQzIDIwLjUxMzhDMC43OTg2NDIgMjEuOTA3NCAxLjI5OTIzIDIzLjI2MTcgMi4yMzMxNCAyNC4yOTY3QzMuMTY3MDUgMjUuMzMxNyA0LjQ2MjkxIDI1Ljk2ODMgNS44NTI4OCAyNi4wNzVDNy4yNDI4NiAyNi4xODE4IDguNjIwNzEgMjUuNzUwNCA5LjcwMTY3IDI0Ljg3MDFMMTMuMjAxNyAyOC4zNzAxQzEzLjMwNDggMjguNDczMyAxMy40NDQ4IDI4LjUzMTIgMTMuNTkwNyAyOC41MzEyQzEzLjczNjYgMjguNTMxMiAxMy44NzY1IDI4LjQ3MzMgMTMuOTc5NyAyOC4zNzAxQzE0LjA4MjggMjguMjY2OSAxNC4xNDA4IDI4LjEyNyAxNC4xNDA4IDI3Ljk4MTFDMTQuMTQwOCAyNy44MzUyIDE0LjA4MjggMjcuNjk1MyAxMy45Nzk3IDI3LjU5MjFWMjcuNTkzMVpNMS45NTg2NyAyMC42NjgxQzEuOTU4ODcgMTkuODEzOSAyLjIxMjM0IDE4Ljk3OSAyLjY4NzA0IDE4LjI2ODhDMy4xNjE3NCAxNy41NTg3IDMuODM2MzQgMTcuMDA1MyA0LjYyNTU2IDE2LjY3ODZDNS40MTQ3NyAxNi4zNTE4IDYuMjgzMTQgMTYuMjY2NCA3LjEyMDg4IDE2LjQzMzJDNy45NTg2MiAxNi42IDguNzI4MSAxNy4wMTE0IDkuMzMyMDIgMTcuNjE1NEM5LjkzNTk0IDE4LjIxOTUgMTAuMzQ3MiAxOC45ODkxIDEwLjUxMzggMTkuODI2OEMxMC42ODAzIDIwLjY2NDYgMTAuNTk0NyAyMS41MzMgMTAuMjY3OCAyMi4zMjIxQzkuOTQwODkgMjMuMTExMyA5LjM4NzMxIDIzLjc4NTcgOC42NzcwOCAyNC4yNjAzQzcuOTY2ODQgMjQuNzM0OCA3LjEzMTg1IDI0Ljk4ODEgNi4yNzc2NyAyNC45ODgxQzUuMTMyMzYgMjQuOTg3IDQuMDM0MjYgMjQuNTMxNSAzLjIyNDUgMjMuNzIxNkMyLjQxNDczIDIyLjkxMTYgMS45NTk0NyAyMS44MTM0IDEuOTU4NjcgMjAuNjY4MVonIGZpbGw9JyNGNUY1RjcnLz4KPC9zdmc+Cg==',
      },
      {
        name: 'alt1',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Group1128614739',
      },
      {
        name: 'src2',
        type: CommonFieldTypes.Image,
        standardValue:
          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTMnIGhlaWdodD0nNDQnIHZpZXdCb3g9JzAgMCAxMyA0NCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZmlsbC1ydWxlPSdldmVub2RkJyBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xMiAyNS45QzEyIDI2LjUgMTEuNSAyNyAxMC45IDI3SDIuMUMxLjUgMjcgMSAyNi41IDEgMjUuOVYxOEMxIDE3LjUgMS41IDE3IDIuMSAxN0gxMUMxMS42IDE3IDEyLjEgMTcuNSAxMi4xIDE4LjFWMjUuOUgxMlpNNi41IDE0QzcuNyAxNCA4LjYgMTQuOSA4LjggMTZINC4yQzQuNCAxNC45IDUuMyAxNCA2LjUgMTRaTTEwLjkgMTZIOS44QzkuNiAxNC4zIDguMiAxMyA2LjUgMTNDNC44IDEzIDMuNCAxNC4zIDMuMiAxNkgyLjFDMC45IDE2IDAgMTYuOSAwIDE4LjFWMjZDMCAyNy4xIDAuOSAyOCAyLjEgMjhIMTFDMTIuMSAyOCAxMy4xIDI3LjEgMTMuMSAyNS45VjE4QzEzIDE2LjkgMTIuMSAxNiAxMC45IDE2WicgZmlsbD0nI0Y1RjVGNycvPgo8L3N2Zz4K',
      },
      {
        name: 'alt2',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Group128614743',
      },
    ],
  })
}
