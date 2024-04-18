import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'MainNavigation1',
    displayName: 'MainNavigation1',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    contentResolver: '',
    fields: [
      {
        name: 'href',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='' linktype='external' url='/en/' anchor='' target=''/>",
      },
      {
        name: 'text',
        type: CommonFieldTypes.SingleLineText,
      },
      {
        name: 'src',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://stage-xm-102cm.kajoo.ai/-/media/Amica/Logos/webimage-9B1B98BC-10CA-4E19-B459EED98FAAE3FA.ashx?h=402&iar=0&w=800&hash=5B3678B2EF15F2345ED7327019ACB4BB"}',
      },
      {
        name: 'alt',
        type: CommonFieldTypes.SingleLineText,
      },
      {
        name: 'text1',
        type: CommonFieldTypes.SingleLineText,
      },
    ],
  })
}
