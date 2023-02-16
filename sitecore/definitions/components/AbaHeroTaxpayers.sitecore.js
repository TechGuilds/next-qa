import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'AbaHeroTaxpayers',
    displayName: 'AbaHeroTaxpayers',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    fields: [
      {
        name: 'text',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Cost to Taxpayers',
      },
      {
        name: 'text1',
        type: CommonFieldTypes.SingleLineText,
        standardValue:
          'The federal income tax exemption for credit unions sticks taxpayers with a hefty bill: nearly $24 billion over 10 years. But with no public accountability for their contributions to their communities, it’s fair to ask: What do taxpayers get in return?',
      },
      {
        name: 'src',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://www.reformcreditunions.com/wp-content/uploads/2021/08/tax-icon2.svg"}',
      },
      {
        name: 'alt',
        type: CommonFieldTypes.SingleLineText,
      },
    ],
  })
}
