import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'New22Figma33Component44',
    displayName: 'New22Figma33Component44',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    fields: [
      {
        name: 'text',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Whitepaper',
      },
      {
        name: 'text1',
        type: CommonFieldTypes.SingleLineText,
        standardValue:
          'Title of This Interesting Whitepaper that You Want to Download',
      },
      {
        name: 'src',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/TechGuilds%20Consulting%20Inc._60d5efadff0a5060c3aaa66d/components/G1x8coshNdV2qdTtkDJPI.png"}',
      },
      {
        name: 'alt',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'CNA1I23102116521229',
      },
      {
        name: 'src1',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/TechGuilds%20Consulting%20Inc._60d5efadff0a5060c3aaa66d/components/GulCSdbxkcniCvnk4Jp_-.png"}',
      },
      {
        name: 'alt1',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'CNA1I23102116621229',
      },
      {
        name: 'src2',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/TechGuilds%20Consulting%20Inc._60d5efadff0a5060c3aaa66d/components/RYwZVy1jn3XZqp8kDBAe-.png"}',
      },
      {
        name: 'alt2',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'imageI23102116821159',
      },
    ],
  })
}
