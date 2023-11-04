import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'CorporateFooter',
    displayName: 'CorporateFooter',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main', 'kajoo-main'],
    contentResolver: '',
    fields: [
      {
        name: 'text',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Contact Us',
      },
      {
        name: 'text1',
        type: CommonFieldTypes.SingleLineText,
        standardValue: '\n                        20 Queen St W #3200,',
      },
      {
        name: 'text2',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Toronto, ON',
      },
      {
        name: 'text3',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'M5H 3R3',
      },
      {
        name: 'text4',
        type: CommonFieldTypes.SingleLineText,
        standardValue: '(416) 487-2020',
      },
      {
        name: 'text5',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Book a Tour',
      },
      {
        name: 'text6',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Get In Touch',
      },
      {
        name: 'text7',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'ABOUT AMICA',
      },
      {
        name: 'text8',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'CAREERS',
      },
      {
        name: 'text9',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'HEALTHCARE PROFESSIONALS',
      },
      {
        name: 'text10',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'HELPING HANDS CHARITY',
      },
      {
        name: 'text11',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Press',
      },
      {
        name: 'text12',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Follow Us',
      },
      {
        name: 'src',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://amica.kajoo.ca/-/media/0fe2da91a6404d78a74157f83698153d.ashx?db=master&la=en&vs=1&ts=20230913t1702387148"}',
      },
      {
        name: 'alt',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Facebook',
      },
      {
        name: 'src1',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://amica.kajoo.ca/-/media/fc0355ac817a480abbdd1a19798ca014.ashx?db=master&la=en&vs=1&ts=20230913t1703039351"}',
      },
      {
        name: 'alt1',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Linkedin',
      },
      {
        name: 'src2',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://amica.kajoo.ca/-/media/238879b709704f11967b188051ede7dc.ashx?db=master&la=en&vs=1&ts=20230914t1526065887"}',
      },
      {
        name: 'alt2',
        type: CommonFieldTypes.SingleLineText,
      },
      {
        name: 'src3',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://amica.kajoo.ca/-/media/e65c3eb0cec049608077fb9cc5b809d2.ashx?db=master&la=en&vs=1&ts=20230914t1525056366"}',
      },
      {
        name: 'alt3',
        type: CommonFieldTypes.SingleLineText,
      },
      {
        name: 'src4',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://amica.kajoo.ca/-/media/9b8d29469aa7491487debf4b4b3973ca.ashx?db=master&la=en&vs=1&ts=20230914t1526337959"}',
      },
      {
        name: 'alt4',
        type: CommonFieldTypes.SingleLineText,
      },
      {
        name: 'text13',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Accessibility Policy',
      },
      {
        name: 'text14',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Privacy Policy',
      },
      {
        name: 'text15',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Terms of Use',
      },
      {
        name: 'text16',
        type: CommonFieldTypes.SingleLineText,
        standardValue:
          '\n                © Amica Senior Lifestyles 2023\n            ',
      },
    ],
  })
}
