import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'Repeat3Component',
    displayName: 'Repeat3Component',
    contentResolver: '2F5C334E5615423C82819FC180191302',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    fields: [
      {
        name: 'items',
        type: CommonFieldTypes.ContentList,
        standardValue:
          '[{"text":"Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late."},{"text":"Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late."},{"text":"Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late."}]',
      },
    ],
  })
}
