import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'AbaHeader',
    displayName: 'AbaHeader',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    fields: [
      {
        name: 'src',
        type: CommonFieldTypes.Image,
        standardValue:
          'https://www.reformcreditunions.com/wp-content/uploads/2021/07/ReformCU_Logo_fix.png',
      },
      {
        name: 'alt',
        type: CommonFieldTypes.SingleLineText,
      },
      {
        name: 'href',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='TAKE ACTION' linktype='external' url='#' anchor='' target=''/>",
      },
      {
        name: 'href1',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='Cost to Taxpayers' linktype='external' url='#' anchor='' target=''/>",
      },
      {
        name: 'href2',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='Lack of Accountabillity' linktype='external' url='#' anchor='' target=''/>",
      },
      {
        name: 'href3',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='Abandoned Mission' linktype='external' url='#' anchor='' target=''/>",
      },
      {
        name: 'href4',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='Unwarranted Advantage' linktype='external' url='#' anchor='' target=''/>",
      },
      {
        name: 'href5',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='Impact in Your State' linktype='external' url='#' anchor='' target=''/>",
      },
      {
        name: 'href6',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='About' linktype='external' url='#' anchor='' target=''/>",
      },
      {
        name: 'src2',
        type: CommonFieldTypes.Image,
        standardValue:
          'https://cdn-icons-png.flaticon.com/128/3388/3388829.png',
      },
      {
        name: 'alt2',
        type: CommonFieldTypes.SingleLineText,
      },
    ],
  })
}
