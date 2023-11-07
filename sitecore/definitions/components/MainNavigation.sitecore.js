import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'MainNavigation',
    displayName: 'MainNavigation',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main', 'kajoo-main'],
    contentResolver: '',
    fields: [
      {
        name: 'href',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='undefined' linktype='external' url='/' anchor='' target=''/>",
      },
      {
        name: 'src',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://amica.kajoo.ca/-/media/amica/logos/amica_sl_corplogo_pms_rev_boxed.svg?h=210&la=en&w=417&hash=6048F369EE2E2ACF346F4C59C3C226D01550AF9E"}',
      },
      {
        name: 'alt',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Amica',
      },
      {
        name: 'text1',
        type: CommonFieldTypes.SingleLineText,
      },
      {
        name: 'href1',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='undefined' linktype='external' url='/amica-conversations' anchor='' target=''/>",
      },
      {
        name: 'href2',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='undefined' linktype='external' url='/amica-difference' anchor='' target=''/>",
      },
      {
        name: 'href3',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='undefined' linktype='external' url='/find-a-residence' anchor='' target=''/>",
      },
      {
        name: 'href4',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='undefined' linktype='external' url='/tools-and-resources' anchor='' target=''/>",
      },
      {
        name: 'href5',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='undefined' linktype='external' url='/book-a-visit' anchor='' target=''/>",
      },
    ],
  })
}
