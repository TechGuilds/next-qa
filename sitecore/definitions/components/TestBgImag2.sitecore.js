import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'TestBgImag2',
    displayName: 'TestBgImag2',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    fields: [
      {
        name: 'text',
        type: CommonFieldTypes.SingleLineText,
        standardValue:
          'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
      },
      {
        name: 'bgImage',
        type: CommonFieldTypes.Image,
        standardValue:
          '<image src="{https://i.ytimg.com/vi/1MaaiLo9z8Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBMsYKLnvs4fv2m_BcJOJ53aA8k7g}"/>',
      },
      {
        name: 'text1',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'This is a disabled BgImage',
      },
      {
        name: 'bgImage2',
        type: CommonFieldTypes.Image,
        standardValue:
          'https://lh4.googleusercontent.com/proxy/idZKbxLiuBY818-VqnIsrNk2zMSYLBE40m8O3Yhh_dDrHFn46vx44JAUlYsbqRY0DxeIN4q6OYL-Pn3qBWBoSH71r30mgUMT5NgSnXrrV40EQ7G_COTxLvHCgI_YUz5dGlj9ZBFA5vuB=w1152-h603-s-nd',
      },
    ],
  })
}
