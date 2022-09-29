/* eslint-disable */
// @ts-nocheck
import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-manifest'

export default function (manifest) {
  manifest.addComponent({
    name: 'new-project-sep-29-14-46-2',
    displayName: 'new-project-sep-29-14-46-2',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      {
        name: 'image_1_src',
        type: CommonFieldTypes.Image,
        standardValue: '/icons/default-imag.svg',
      },
      {
        name: 'image_1_alt',
        type: CommonFieldTypes.SingleLineText,
        standardValue: '',
      },
      {
        name: 'text_2_text',
        type: CommonFieldTypes.SingleLineText,
        standardValue:
          'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
      },
    ],
  })
}
