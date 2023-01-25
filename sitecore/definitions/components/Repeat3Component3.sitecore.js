import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'Repeat3Component3',
    displayName: 'Repeat3Component3',
    contentResolver: '2F5C334E5615423C82819FC180191302',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    fields: [
      {
        name: 'src',
        type: CommonFieldTypes.Image,
        standardValue: '/icons/default-imag.svg',
      },
      {
        name: 'alt',
        type: CommonFieldTypes.SingleLineText,
      },
      {
        name: 'items',
        type: CommonFieldTypes.ContentList,
        standardValue:
          '[{"src1":"http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4","muted":"true","poster":"https://peach.blender.org/wp-content/uploads/bbb-splash.png?x81236","text1":"Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late."},{"src1":"http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4","muted":"true","poster":"https://peach.blender.org/wp-content/uploads/bbb-splash.png?x81236","text1":"Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late."},{"src1":"http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4","muted":"true","poster":"https://peach.blender.org/wp-content/uploads/bbb-splash.png?x81236","text1":"Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late."}]',
      },
    ],
  })
}
