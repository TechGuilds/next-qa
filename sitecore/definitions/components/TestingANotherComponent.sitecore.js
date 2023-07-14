import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'TestingANotherComponent',
    displayName: 'TestingANotherComponent',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    contentResolver: '',
    fields: [
      {
        name: 'fields.bgImage',
        type: CommonFieldTypes.Image,
      },
      {
        name: 'fields.bgImage1',
        type: CommonFieldTypes.Image,
      },
      {
        name: 'fields.bgImage2',
        type: CommonFieldTypes.Image,
      },
      {
        name: 'fields.text',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'HEADER',
      },
      {
        name: 'fields.src',
        type: CommonFieldTypes.Image,
        standardValue: '/icons/default-imag.svg',
      },
      {
        name: 'fields.alt',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'default-kajoo-imag',
      },
      {
        name: 'fields.text1',
        type: CommonFieldTypes.SingleLineText,
        standardValue:
          'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
      },
      {
        name: 'fields.bgImage3',
        type: CommonFieldTypes.Image,
      },
      {
        name: 'fields.bgImage4',
        type: CommonFieldTypes.Image,
      },
      {
        name: 'fields.text2',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'HEADER',
      },
      {
        name: 'fields.src1',
        type: CommonFieldTypes.Image,
        standardValue: '/icons/default-imag.svg',
      },
      {
        name: 'fields.alt1',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'default-kajoo-imag',
      },
      {
        name: 'fields.text3',
        type: CommonFieldTypes.SingleLineText,
        standardValue:
          'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
      },
      {
        name: 'fields.bgImage5',
        type: CommonFieldTypes.Image,
      },
      {
        name: 'fields.bgImage6',
        type: CommonFieldTypes.Image,
      },
      {
        name: 'fields.text4',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'HEADER',
      },
      {
        name: 'fields.src2',
        type: CommonFieldTypes.Image,
        standardValue: '/icons/default-imag.svg',
      },
      {
        name: 'fields.alt2',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'default-kajoo-imag',
      },
      {
        name: 'fields.text5',
        type: CommonFieldTypes.SingleLineText,
        standardValue:
          'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
      },
      {
        name: 'fields.bgImage7',
        type: CommonFieldTypes.Image,
      },
      {
        name: 'fields.link',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='undefined' linktype='external' url='#' anchor='' target=''/>",
      },
      {
        name: 'fields.href',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='undefined' linktype='external' url='#' anchor='' target=''/>",
      },
      {
        name: 'fields.link1',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='undefined' linktype='external' url='#' anchor='' target=''/>",
      },
      {
        name: 'fields.src3',
        type: CommonFieldTypes.ItemLink,
        standardValue: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
        source: '/sitecore/media library',
      },
      {
        name: 'fields.link2',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='undefined' linktype='external' url='#' anchor='' target=''/>",
      },
      {
        name: 'fields.text10',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Label',
      },
    ],
  })
}
