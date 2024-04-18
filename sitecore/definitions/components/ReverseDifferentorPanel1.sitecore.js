import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'ReverseDifferentorPanel1',
    displayName: 'ReverseDifferentorPanel1',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    contentResolver: '',
    fields: [
      {
        name: 'text',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Personalizing your care, prioritizing your wellness',
      },
      {
        name: 'text1',
        type: CommonFieldTypes.SingleLineText,
        standardValue:
          'Care that is considerate, respectful and personalized to your wishes and schedule — that’s what you can expect from our highly trained professional wellness teams. We get to know your needs and routines to provide exceptional, experienced support based on your preferences in the privacy of your suite. And if your needs or preferences change, so will our care.',
      },
      {
        name: 'href',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='DISCOVER PERSONALIZED CARE' linktype='external' url='https://www.amica.ca/amica-difference/best-in-class' anchor='' target=''/>",
      },
      {
        name: 'text2',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'DISCOVER PERSONALIZED CARE',
      },
      {
        name: 'text3',
        type: CommonFieldTypes.SingleLineText,
        standardValue: ' ',
      },
      {
        name: 'src',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://stage-xm-102cm.kajoo.ai/-/media/Amica/Amica-Difference/Differentiator_panel_desktop-Amica_ButtonsDressing_0249.ashx?h=507&iar=0&w=760&hash=A938613B1420A13B6561B3BE101DBB42"}',
      },
      {
        name: 'alt',
        type: CommonFieldTypes.SingleLineText,
      },
    ],
  })
}
