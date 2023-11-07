import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'ReverseDifferentiatorPanel',
    displayName: 'ReverseDifferentiatorPanel',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main', 'kajoo-main'],
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
          ' Care that is considerate, respectful and personalized to your wishes and schedule — that’s what you can expect from our highly trained professional wellness teams. We get to know your needs and routines to provide exceptional, experienced support based on your preferences in the privacy of your suite. And if your needs or preferences change, so will our care.',
      },
      {
        name: 'src',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://amica.kajoo.ca/-/media/amica/differentiator_panel_desktop-amica_dressing_cam2_0143.jpg?h=507&la=en&w=760&hash=16A696C3C375CA7B0D34FFA9439116756A477AD9"}',
      },
      {
        name: 'alt',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Dressing',
      },
    ],
  })
}
