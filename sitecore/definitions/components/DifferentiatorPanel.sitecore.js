import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'DifferentiatorPanel',
    displayName: 'DifferentiatorPanel',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    contentResolver: '',
    fields: [
      {
        name: 'text',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'It’s time for some straight answers.',
      },
      {
        name: 'value',
        type: CommonFieldTypes.RichText,
        standardValue:
          '<div data-kajoo-element-type="rich-text">\n<p>Will I be in charge of my day? Can I eat what, and when, I want? &nbsp;Will I have to move if I need extra care? Moving to senior living is a big decision. If you’re not asking questions like these, maybe you should be. Ask us. You’ll get the straightforward answers you’re looking for.</p>\n<p>You have questions. Here are others to consider.</p>\n</div>',
      },
      {
        name: 'text1',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Book a Tour',
      },
      {
        name: 'src',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://amica.kajoo.ca/-/media/amica/differentiator_panel_desktop-occ_senwoman760x546.jpg?h=546&la=en&w=760&hash=1EF5C98BC24BB608E6ABAE3D233EF41D10F27F15"}',
      },
      {
        name: 'alt',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Women',
      },
    ],
  })
}
