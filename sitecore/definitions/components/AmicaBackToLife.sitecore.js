import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'AmicaBackToLife',
    displayName: 'AmicaBackToLife',
    icon: SitecoreIcon.DocumentTag,
    placeholders: ['jss-main'],
    fields: [
      {
        name: 'bgImage',
        type: CommonFieldTypes.Image,
      },
      {
        name: 'text',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'WELCOME BACK, LIFE.',
      },
      {
        name: 'bgImage1',
        type: CommonFieldTypes.Image,
      },
      {
        name: 'value',
        type: CommonFieldTypes.RichText,
        standardValue:
          '<span style="color: rgba(101, 101, 103, 1); \nwidth: 800px; \nheight: auto; \nfont-weight: 400; \nfont-family: Open Sans; \ntext-align: center; \nline-height: 28.799999237060547px; \nfont-size: 16px; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: auto; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n"><span style="color: rgba(101, 101, 103, 1); \nwidth: 800px; \nheight: auto; \nfont-weight: 400; \ntext-align: center; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: auto; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n">Thanks to the conscientious dedication of our residents and team members, the return to normalcy has happened at a faster pace inside our residences than outside. Life at Amica is once again its wonderful, normal self. Want to see for yourself? </span><span style="color: rgba(88, 122, 141, 1); \nwidth: 800px; \nheight: auto; \nfont-weight: 700; \ntext-align: center; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: auto; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n">Find a residence near you</span><span style="color: rgba(101, 101, 103, 1); \nwidth: 800px; \nheight: auto; \nfont-weight: 400; \ntext-align: center; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: auto; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n"> to give us a call, or schedule private tour.</span></span>',
      },
      {
        name: 'bgImage2',
        type: CommonFieldTypes.Image,
      },
      {
        name: 'bgImage3',
        type: CommonFieldTypes.Image,
      },
      {
        name: 'text1',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'BOOK A TOUR',
      },
    ],
  })
}
