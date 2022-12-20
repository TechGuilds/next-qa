import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'ComponentC',
    displayName: 'ComponentC',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    fields: [
      {
        name: 'value',
        type: CommonFieldTypes.RichText,
        standardValue:
          '<iframe width="560" height="315" src="https://www.youtube.com/embed/Iu99pZdYwOg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      },
    ],
  })
}
