/* eslint-disable */
// @ts-nocheck
import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'new-project-oct-03-20-20-18',
    displayName: 'new-project-oct-03-20-20-18',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      {
        name: 'image_2_src',
        type: CommonFieldTypes.Image,
        standardValue: '/icons/default-imag.svg',
      },
      {
        name: 'image_2_alt',
        type: CommonFieldTypes.SingleLineText,
        standardValue: '',
      },
      {
        name: 'image_3_src',
        type: CommonFieldTypes.Image,
        standardValue: '/icons/default-imag.svg',
      },
      {
        name: 'image_3_alt',
        type: CommonFieldTypes.SingleLineText,
        standardValue: '',
      },
      {
        name: 'richText_4_value',
        type: CommonFieldTypes.RichText,
        standardValue:
          '<p>Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.</p>',
      },
      {
        name: 'text_5_text',
        type: CommonFieldTypes.SingleLineText,
        standardValue:
          'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
      },
    ],
  })
}
