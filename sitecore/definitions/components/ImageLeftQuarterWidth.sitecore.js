import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'ImageLeftQuarterWidth',
    displayName: 'ImageLeftQuarterWidth',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    contentResolver: '',
    fields: [
      {
        name: 'bgImage',
        type: CommonFieldTypes.Image,
        standardValue: 'https://www.biolage.ca/dist/img/about_us_bg.jpg',
      },
      {
        name: 'src',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://www.biolage.ca/dist/img/about_us_logo.jpg"}',
      },
      {
        name: 'alt',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'About Biolage',
      },
      {
        name: 'Title',
        type: CommonFieldTypes.RichText,
        standardValue: '<h2>about <span style="color: green;">us</span></h2>',
      },
      {
        name: 'Description',
        type: CommonFieldTypes.RichText,
        standardValue:
          '<p><span style="color: green;">BIOLAGE</span> is recognized worldwide as a leader in the professional haircare field. This is because <span style="color: green;">BIOLAGE</span> is constantly improving — taking haircare to new levels by offering high-performance, professional-quality products powered by botanicals.</p>',
      },
    ],
  })
}
