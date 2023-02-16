import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'Test0103Component',
    displayName: 'Test0103Component',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    fields: [
      {
        name: 'text',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Blog  |  Category',
      },
      {
        name: 'value',
        type: CommonFieldTypes.RichText,
        standardValue:
          '<span style="font-size: 28px; \nfont-family: Roboto; \nfont-style: normal; \nfont-weight: 400; \nfont-stretch: normal; \ncolor: rgba(34, 34, 34, 1); \nwidth: 410px; \nheight: auto; \ntext-align: left; \nline-height: 36px; \nmargin-left: 0; \nmargin-right: 0; \nmargin-top: 0; \nmargin-bottom: 40px; \nalign-self: stretch; \nflex-grow: 0; \nposition: ; \n"><span >Optimizing Sitecore </span><br /><span >Experience Editor - Rendering Multiple Child Items in One Component</span></span>',
      },
      {
        name: 'src',
        type: CommonFieldTypes.Image,
        standardValue:
          'data:image/png;base64,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',
      },
      {
        name: 'alt',
        type: CommonFieldTypes.SingleLineText,
        standardValue:
          'blankprofilepicture973460640imageI410998541099671054953',
      },
      {
        name: 'text1',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Full Name',
      },
      {
        name: 'text2',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Position',
      },
      {
        name: 'text3',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Organization',
      },
      {
        name: 'alt1',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'iconI4531033445310118',
      },
      {
        name: 'xvc',
        type: CommonFieldTypes.Image,
        standardValue:
          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjUwJyBoZWlnaHQ9JzE4OCcgdmlld0JveD0nMCAwIDI1MCAxODgnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxwYXRoIGZpbGwtcnVsZT0nZXZlbm9kZCcgY2xpcC1ydWxlPSdldmVub2RkJyBkPSdNMTA5LjM3NSAxODdDMTA5LjM3NSAxODcgOTMuNzUgMTg3IDkzLjc1IDE3MS40MTdDOTMuNzUgMTU1LjgzMyAxMDkuMzc1IDEwOS4wODMgMTcxLjg3NSAxMDkuMDgzQzIzNC4zNzUgMTA5LjA4MyAyNTAgMTU1LjgzMyAyNTAgMTcxLjQxN0MyNTAgMTg3IDIzNC4zNzUgMTg3IDIzNC4zNzUgMTg3TDEwOS4zNzUgMTg3Wk0xNzEuODc1IDkzLjVDMTk3Ljc2MyA5My41IDIxOC43NSA3Mi41NjkzIDIxOC43NSA0Ni43NUMyMTguNzUgMjAuOTMwNyAxOTcuNzYzIDAgMTcxLjg3NSAwQzE0NS45ODcgMCAxMjUgMjAuOTMwNyAxMjUgNDYuNzVDMTI1IDcyLjU2OTMgMTQ1Ljk4NyA5My41IDE3MS44NzUgOTMuNVpNODEuNSAxODcuMDAxQzc5LjE4MzcgMTgyLjEzNiA3OC4wMjg1IDE3Ni44MDMgNzguMTI1IDE3MS40MThDNzguMTI1IDE1MC4zMDMgODguNzUgMTI4LjU2NCAxMDguMzc1IDExMy40NDhDOTguNTc5NiAxMTAuNDM4IDg4LjM3NDIgMTA4Ljk2NiA3OC4xMjUgMTA5LjA4NUMxNS42MjUgMTA5LjA4NSAwIDE1NS44MzUgMCAxNzEuNDE4QzAgMTg3LjAwMSAxNS42MjUgMTg3LjAwMSAxNS42MjUgMTg3LjAwMUw4MS41IDE4Ny4wMDFaTTcwLjMxMjUgOTMuNUM5MS44ODYxIDkzLjUgMTA5LjM3NSA3Ni4wNTc3IDEwOS4zNzUgNTQuNTQxN0MxMDkuMzc1IDMzLjAyNTYgOTEuODg2MSAxNS41ODMzIDcwLjMxMjUgMTUuNTgzM0M0OC43Mzg5IDE1LjU4MzMgMzEuMjUgMzMuMDI1NiAzMS4yNSA1NC41NDE3QzMxLjI1IDc2LjA1NzggNDguNzM4OSA5My41IDcwLjMxMjUgOTMuNVonIGZpbGw9J3doaXRlJy8+Cjwvc3ZnPgo=',
      },
    ],
  })
}
