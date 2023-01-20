import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'RepeaterComponent',
    displayName: 'RepeaterComponent',
    contentResolver: '2F5C334E5615423C82819FC180191302',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    fields: [
      {
        name: 'items',
        type: CommonFieldTypes.ContentList,
        standardValue:
          '[{"text":"Heading","src":"https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/TechGuilds%20Consulting%20Inc._60d5efadff0a5060c3aaa66d/assets/I_p6QbgGCRlik1UJv8qR_.svg","alt":"","text1":"Button","link":""},{"text":"Heading","src":"https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/TechGuilds%20Consulting%20Inc._60d5efadff0a5060c3aaa66d/assets/I_p6QbgGCRlik1UJv8qR_.svg","alt":"","text1":"Button","link":""},{"text":"Heading","src":"https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/TechGuilds%20Consulting%20Inc._60d5efadff0a5060c3aaa66d/assets/I_p6QbgGCRlik1UJv8qR_.svg","alt":"","text1":"Button","link":""}]',
      },
    ],
  })
}
