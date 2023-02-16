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
          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTQnIGhlaWdodD0nNDQnIHZpZXdCb3g9JzAgMCAxNCA0NCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPGcgY2xpcC1wYXRoPSd1cmwoI2NsaXAwXzEyODZfMTQ3MzYpJz4KPHBhdGggZD0nTTEzLjA3NDUgMTcuNTIxNEMxMi45ODE1IDE3LjU5MzcgMTEuMzQ5NyAxOC41MTI5IDExLjM0OTcgMjAuNTU3OEMxMS4zNDk3IDIyLjkyMjkgMTMuNDI1NiAyMy43NTk1IDEzLjQ4NzYgMjMuNzgwMUMxMy40NzczIDIzLjgzMTcgMTMuMTU3MSAyNC45MjY1IDEyLjM5MjggMjYuMDQxOUMxMS43MTEyIDI3LjAyMzEgMTAuOTk4NSAyOC4wMDQyIDkuOTE0MTMgMjguMDA0MkM4LjgyOTczIDI4LjAwNDIgOC41NTA4MiAyNy4zNzQyIDcuMzAxMTMgMjcuMzc0MkM2LjA4MjQyIDI3LjM3NDIgNS42NDg2MyAyOC4wMjQ5IDQuNjU3MTIgMjguMDI0OUMzLjY2NTYyIDI4LjAyNDkgMi45NzM2MyAyNy4xMTYgMi4xNzg0MyAyNi4wMDA2QzEuMjU5MjMgMjQuNjg4OSAwLjUxNTYyNSAyMi42NTQzIDAuNTE1NjI1IDIwLjcyM0MwLjUxNTYyNSAxNy42MjQ2IDIuNTI5NjMgMTUuOTgyNCA0LjUxMjUzIDE1Ljk4MjRDNS41NjYwMyAxNS45ODI0IDYuNDQzODMgMTYuNjc0NCA3LjEwNDgzIDE2LjY3NDRDNy43MzQ4MyAxNi42NzQ0IDguNzE2MDMgMTUuOTQxMSA5LjkxNDAzIDE1Ljk0MTFDMTAuMzY4NSAxNS45NDEyIDEyLjAwMDQgMTUuOTgyNiAxMy4wNzQ1IDE3LjUyMTRWMTcuNTIxNFpNOS4zNDYxMiAxNC42Mjk2QzkuODQxODIgMTQuMDQwOSAxMC4xOTMgMTMuMjI1IDEwLjE5MyAxMi40MDkxQzEwLjE5MyAxMi4yOTU1IDEwLjE4MjcgMTIuMTgxOSAxMC4xNjIgMTIuMDg4OUM5LjM1NjQzIDEyLjExOTkgOC4zOTU5MiAxMi42MjYgNy44MTc1MiAxMy4yOTczQzcuMzYzMTIgMTMuODEzNyA2LjkzOTYzIDE0LjYyOTYgNi45Mzk2MyAxNS40NTU5QzYuOTM5NjMgMTUuNTc5OCA2Ljk2MDMyIDE1LjcwMzggNi45NzA2MiAxNS43NDUxQzcuMDIyMjIgMTUuNzU1NCA3LjEwNDkzIDE1Ljc2NTggNy4xODc1MyAxNS43NjU4QzcuOTEwNTMgMTUuNzY1NyA4LjgxOTMyIDE1LjI4MDMgOS4zNDYxMiAxNC42Mjk2VjE0LjYyOTZaJyBmaWxsPSd3aGl0ZScvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9J2NsaXAwXzEyODZfMTQ3MzYnPgo8cmVjdCB3aWR0aD0nMTQnIGhlaWdodD0nNDQnIGZpbGw9J3doaXRlJy8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==',
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
          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTUnIGhlaWdodD0nNDQnIHZpZXdCb3g9JzAgMCAxNSA0NCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTEzLjk3ODcgMjcuNTkzMUwxMC40Nzg3IDI0LjA5MzFDMTEuMzYwNCAyMy4wMTMzIDExLjc5MzUgMjEuNjM2IDExLjY4ODYgMjAuMjQ1OEMxMS41ODM3IDE4Ljg1NTcgMTAuOTQ4NyAxNy41NTkxIDkuOTE0OSAxNi42MjM4QzguODgxMSAxNS42ODg2IDcuNTI3NTEgMTUuMTg2MiA2LjEzMzg2IDE1LjIyMDdDNC43NDAyMiAxNS4yNTUxIDMuNDEzMDYgMTUuODIzNiAyLjQyNjY3IDE2LjgwODdDMS40NDAyOSAxNy43OTM4IDAuODcwMDY3IDE5LjEyMDIgMC44MzM4NjYgMjAuNTEzOEMwLjc5NzY2NiAyMS45MDc0IDEuMjk4MjUgMjMuMjYxNyAyLjIzMjE2IDI0LjI5NjdDMy4xNjYwOCAyNS4zMzE3IDQuNDYxOTMgMjUuOTY4MyA1Ljg1MTkxIDI2LjA3NUM3LjI0MTg4IDI2LjE4MTggOC42MTk3MyAyNS43NTA0IDkuNzAwNyAyNC44NzAxTDEzLjIwMDcgMjguMzcwMUMxMy4zMDM5IDI4LjQ3MzMgMTMuNDQzOCAyOC41MzEyIDEzLjU4OTcgMjguNTMxMkMxMy43MzU2IDI4LjUzMTIgMTMuODc1NSAyOC40NzMzIDEzLjk3ODcgMjguMzcwMUMxNC4wODE5IDI4LjI2NjkgMTQuMTM5OCAyOC4xMjcgMTQuMTM5OCAyNy45ODExQzE0LjEzOTggMjcuODM1MiAxNC4wODE5IDI3LjY5NTMgMTMuOTc4NyAyNy41OTIxVjI3LjU5MzFaTTEuOTU3NyAyMC42NjgxQzEuOTU3ODkgMTkuODEzOSAyLjIxMTM3IDE4Ljk3OSAyLjY4NjA3IDE4LjI2ODhDMy4xNjA3NiAxNy41NTg3IDMuODM1MzcgMTcuMDA1MyA0LjYyNDU4IDE2LjY3ODZDNS40MTM3OSAxNi4zNTE4IDYuMjgyMTcgMTYuMjY2NCA3LjExOTkgMTYuNDMzMkM3Ljk1NzY0IDE2LjYgOC43MjcxMiAxNy4wMTE0IDkuMzMxMDQgMTcuNjE1NEM5LjkzNDk3IDE4LjIxOTUgMTAuMzQ2MiAxOC45ODkxIDEwLjUxMjggMTkuODI2OEMxMC42NzkzIDIwLjY2NDYgMTAuNTkzOCAyMS41MzMgMTAuMjY2OCAyMi4zMjIxQzkuOTM5OTEgMjMuMTExMyA5LjM4NjMzIDIzLjc4NTcgOC42NzYxIDI0LjI2MDNDNy45NjU4NyAyNC43MzQ4IDcuMTMwODcgMjQuOTg4MSA2LjI3NjcgMjQuOTg4MUM1LjEzMTM4IDI0Ljk4NyA0LjAzMzI5IDI0LjUzMTUgMy4yMjM1MiAyMy43MjE2QzIuNDEzNzUgMjIuOTExNiAxLjk1ODQ5IDIxLjgxMzQgMS45NTc3IDIwLjY2ODFWMjAuNjY4MVonIGZpbGw9JyNGNUY1RjcnLz4KPC9zdmc+Cg==',
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
          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTMnIGhlaWdodD0nNDQnIHZpZXdCb3g9JzAgMCAxMyA0NCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZmlsbC1ydWxlPSdldmVub2RkJyBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xMiAyNS45QzEyIDI2LjUgMTEuNSAyNyAxMC45IDI3SDIuMUMxLjUgMjcgMSAyNi41IDEgMjUuOVYxOEMxIDE3LjUgMS41IDE3IDIuMSAxN0gxMUMxMS42IDE3IDEyLjEgMTcuNSAxMi4xIDE4LjFWMjUuOUgxMlpNNi41IDE0QzcuNyAxNCA4LjYgMTQuOSA4LjggMTZINC4yQzQuNCAxNC45IDUuMyAxNCA2LjUgMTRWMTRaTTEwLjkgMTZIOS44QzkuNiAxNC4zIDguMiAxMyA2LjUgMTNDNC44IDEzIDMuNCAxNC4zIDMuMiAxNkgyLjFDMC45IDE2IDAgMTYuOSAwIDE4LjFWMjZDMCAyNy4xIDAuOSAyOCAyLjEgMjhIMTFDMTIuMSAyOCAxMy4xIDI3LjEgMTMuMSAyNS45VjE4QzEzIDE2LjkgMTIuMSAxNiAxMC45IDE2VjE2WicgZmlsbD0nI0Y1RjVGNycvPgo8L3N2Zz4K',
      },
      {
        name: 'alt2',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Group128614743',
      },
    ],
  })
}
