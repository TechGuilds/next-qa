import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'CorporateFooter2',
    displayName: 'CorporateFooter2',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
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
        name: 'href',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='ABOUT AMICA' linktype='external' url='https://www.amica.ca/amica-difference/about-amica' anchor='' target=''/>",
      },
      {
        name: 'text5',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'ABOUT AMICA',
      },
      {
        name: 'href1',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='CAREERS' linktype='external' url='https://www.amica.ca/careers' anchor='' target=''/>",
      },
      {
        name: 'text6',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'CAREERS',
      },
      {
        name: 'href2',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='HEALTHCARE PROFESSIONALS' linktype='external' url='https://www.amica.ca/healthcare-professionals' anchor='' target=''/>",
      },
      {
        name: 'text7',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'HEALTHCARE PROFESSIONALS',
      },
      {
        name: 'href3',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='HELPING HANDS CHARITY' linktype='external' url='https://www.amica.ca/helping-hands-charity' anchor='' target=''/>",
      },
      {
        name: 'text8',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'HELPING HANDS CHARITY',
      },
      {
        name: 'href4',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='Press' linktype='external' url='https://www.amica.ca/press' anchor='' target=''/>",
      },
      {
        name: 'text9',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Press',
      },
      {
        name: 'text10',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Follow Us',
      },
      {
        name: 'href5',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='' linktype='external' url='https://www.facebook.com/AmicaSeniorLifestyles/' anchor='' target=''/>",
      },
      {
        name: 'text11',
        type: CommonFieldTypes.SingleLineText,
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
        name: 'href6',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='' linktype='external' url='https://www.linkedin.com/company/amica-senior-lifestyles/' anchor='' target=''/>",
      },
      {
        name: 'text12',
        type: CommonFieldTypes.SingleLineText,
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
        name: 'href7',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='' linktype='external' url='https://www.instagram.com/amicaseniorlifestyles/' anchor='' target=''/>",
      },
      {
        name: 'text13',
        type: CommonFieldTypes.SingleLineText,
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
        name: 'href8',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='' linktype='external' url='https://www.youtube.com/channel/UCXyqMibqd9ppUjdR_OzH2AQ/featured' anchor='' target=''/>",
      },
      {
        name: 'text14',
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
        name: 'href9',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='' linktype='external' url='https://www.pinterest.ca/AmicaSeniorLifestyles/_created/' anchor='' target=''/>",
      },
      {
        name: 'text15',
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
        name: 'href10',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='Accessibility Policy' linktype='external' url='https://www.amica.ca/accessibility-policy' anchor='' target=''/>",
      },
      {
        name: 'text16',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Accessibility Policy',
      },
      {
        name: 'href11',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='Privacy Policy' linktype='external' url='https://www.amica.ca/privacy-policy' anchor='' target=''/>",
      },
      {
        name: 'text17',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Privacy Policy',
      },
      {
        name: 'href12',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='Terms of Use' linktype='external' url='https://www.amica.ca/terms-of-use' anchor='' target=''/>",
      },
      {
        name: 'text18',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Terms of Use',
      },
      {
        name: 'text19',
        type: CommonFieldTypes.SingleLineText,
        standardValue:
          '\n                © Amica Senior Lifestyles 2024\n            ',
      },
    ],
  })
}
