import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'AmicaDiscoverLife',
    displayName: 'AmicaDiscoverLife',
    icon: SitecoreIcon.DocumentTag,
    placeholders: ['jss-main'],
    fields: [
      {
        name: 'bgImage',
        type: CommonFieldTypes.Image,
      },
      {
        name: 'bgImage1',
        type: CommonFieldTypes.Image,
      },
      {
        name: 'text',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Discover Life at Amica',
      },
      {
        name: 'bgImage3',
        type: CommonFieldTypes.Image,
      },
      {
        name: 'text1',
        type: CommonFieldTypes.SingleLineText,
        standardValue:
          'Life at Amica starts with beautifully designed retirement residences in Canada’s best neighbourhoods where seniors are empowered to live with freedom, optimism and peace of mind. Amica is the choice of modern seniors who want more out of life.',
      },
      {
        name: 'value',
        type: CommonFieldTypes.RichText,
        standardValue:
          '<span style="color: rgba(101, 101, 103, 1); \nwidth: 890px; \nheight: auto; \nfont-weight: 700; \nfont-family: Open Sans; \ntext-align: left; \nline-height: 28.799999237060547px; \nfont-size: 16px; \nfont-style: normal; \nfont-stretch: normal; \nmargin-left: 0; \nmargin-right: 0; \nmargin-top: 0; \nmargin-bottom: 13px; \nalign-self: stretch; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n"><span style="color: rgba(101, 101, 103, 1); \nwidth: 890px; \nheight: auto; \nfont-weight: 700; \ntext-align: left; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: stretch; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n">Inspiring lifestyle, amenities and dining</span><span style="color: rgba(101, 101, 103, 1); \nwidth: 890px; \nheight: auto; \nfont-weight: 400; \ntext-align: left; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: stretch; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n">Every residence provides a vibrant lifestyle with a wide selection of convenient amenities and services where you can pursue your passions and discover new ones. Well-appointed fitness centres help you meet your physical goals. Craft kitchens let you express your creative side or watch chef demonstrations. Relax and connect in our libraries, home theatres and computer lounges.</span></span>',
      },
      {
        name: 'text2',
        type: CommonFieldTypes.SingleLineText,
        standardValue:
          'Our Red Seal chefs prepare a delicious daily selection of fresh, seasonal, dietitian-approved dishes to suit your appetite. Enjoy your meals in a choice of settings, including elegant, fully licensed dining rooms, self-serve bistros and outdoor patios.',
      },
      {
        name: 'value1',
        type: CommonFieldTypes.RichText,
        standardValue:
          '<span style="color: rgba(101, 101, 103, 1); \nwidth: 890px; \nheight: auto; \nfont-weight: 700; \nfont-family: Open Sans; \ntext-align: left; \nline-height: 28.799999237060547px; \nfont-size: 16px; \nfont-style: normal; \nfont-stretch: normal; \nmargin-left: 0; \nmargin-right: 0; \nmargin-top: 0; \nmargin-bottom: 13px; \nalign-self: stretch; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n"><span style="color: rgba(101, 101, 103, 1); \nwidth: 890px; \nheight: auto; \nfont-weight: 700; \ntext-align: left; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: stretch; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n">Comprehensive wellness and safety programs</span><span style="color: rgba(101, 101, 103, 1); \nwidth: 890px; \nheight: auto; \nfont-weight: 400; \ntext-align: left; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: stretch; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n"> Amica residents stay engaged at extensive daily recreational activities designed to bring people together using the most effective safety protocols in the senior living industry. Every day, you’ll have the opportunity to socialize, learn, and enjoy life in an unparalleled selection of interesting programs, from live music and arts workshops to volunteering opportunities, family events and themed parties.</span></span>',
      },
      {
        name: 'value2',
        type: CommonFieldTypes.RichText,
        standardValue:
          '<span style="color: rgba(101, 101, 103, 1); \nwidth: 890px; \nheight: auto; \nfont-weight: 700; \nfont-family: Open Sans; \ntext-align: left; \nline-height: 28.799999237060547px; \nfont-size: 16px; \nfont-style: normal; \nfont-stretch: normal; \nmargin-left: 0; \nmargin-right: 0; \nmargin-top: 0; \nmargin-bottom: 13px; \nalign-self: stretch; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n"><span style="color: rgba(101, 101, 103, 1); \nwidth: 890px; \nheight: auto; \nfont-weight: 700; \ntext-align: left; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: stretch; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n">Experiences tailored to you</span><span style="color: rgba(101, 101, 103, 1); \nwidth: 890px; \nheight: auto; \nfont-weight: 400; \ntext-align: left; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: stretch; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n"> You can keep your favourite routines and you don’t have to fit into a schedule at Amica: we adapt to yours. You’re in charge of all aspects of your day, from deciding what to order for lunch to choosing which activities or excursions you’d like to join. We’re here to do whatever we can to make you and your family feel at home.</span></span>',
      },
      {
        name: 'value3',
        type: CommonFieldTypes.RichText,
        standardValue:
          '<span style="color: rgba(101, 101, 103, 1); \nwidth: 890px; \nheight: auto; \nfont-weight: 700; \nfont-family: Open Sans; \ntext-align: left; \nline-height: 28.799999237060547px; \nfont-size: 16px; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: stretch; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n"><span style="color: rgba(101, 101, 103, 1); \nwidth: 890px; \nheight: auto; \nfont-weight: 700; \ntext-align: left; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: stretch; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n">The best care</span><span style="color: rgba(101, 101, 103, 1); \nwidth: 890px; \nheight: auto; \nfont-weight: 400; \ntext-align: left; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: stretch; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n"> With nurses in every residence, our clinical expertise sets us apart. We’re known for providing attentive, comprehensive personalized care that adapts with you. As your needs change, so does our care. At Amica, you will always have the support you need to live your life fully without having to worry about moving again.</span></span>',
      },
    ],
  })
}
