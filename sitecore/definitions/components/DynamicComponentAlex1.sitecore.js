import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'DynamicComponentAlex1',
    displayName: 'DynamicComponentAlex1',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    contentResolver: '',
    fields: [
      {
        name: 'value2',
        type: CommonFieldTypes.RichText,
        standardValue:
          '<p>Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Alex Content</p>',
      },
    ],
  })
}
