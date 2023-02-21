import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'ContentBlockswithLink221',
    displayName: 'ContentBlockswithLink221',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    contentResolver: '',
    fields: [
      {
        name: 'text',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Prepare',
      },
      {
        name: 'text1',
        type: CommonFieldTypes.SingleLineText,
        standardValue:
          'We start by getting to know a bit more about you: What your goals are, how you’re using Sitecore to achieve them, what your pain points and frustrations are. We can help you articulate them by asking questions and listening to you.',
      },
      {
        name: 'text2',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Deep dive\r',
      },
      {
        name: 'text3',
        type: CommonFieldTypes.SingleLineText,
        standardValue:
          'We perform a thorough assessment of your Sitecore implementation to uncover lurking issues that are secretly crippling performance, usability, efficiency and ultimately your bottom line.',
      },
      {
        name: 'text4',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Uncover',
      },
      {
        name: 'text5',
        type: CommonFieldTypes.SingleLineText,
        standardValue:
          'We present a report of our findings and recommendations. In the report, we score each issue on severity, difficulty to fix and priority. This gives you a clear action plan: a list of prioritized action items that will get your Sitecore implementation back on track.\r',
      },
      {
        name: 'text6',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Action\r',
      },
      {
        name: 'text7',
        type: CommonFieldTypes.SingleLineText,
        standardValue:
          'Now that you have your action plan, your team can start chipping away at those issues. Or you can sign up for one of TechGuilds Super Care™ plans (Sitecore Managed Services previously) and get a team of Sitecore specialists tackle them for you.\r',
      },
      {
        name: 'text9',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Button',
      },
      {
        name: 'href',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='Link' linktype='external' url='#' anchor='' target=''/>",
      },
    ],
  })
}
