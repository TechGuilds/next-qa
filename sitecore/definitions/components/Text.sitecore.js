import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'Text',
    displayName: 'Text',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    fields: [
      {
        name: 'value',
        type: CommonFieldTypes.RichText,
        standardValue:
          '<div class="elementor-widget-container">\n\t\t\t\t\t\t\t<p style="font-size: 1rem; line-height: 1.8em; margin-bottom: 1em-">Reform Credit Unions is&nbsp;dedicated to calling attention to the critical need to examine and modernize the laws and regulations related to credit unions. These issues include&nbsp;certain&nbsp;credit unions:&nbsp;&nbsp;</p>\n<ul style="    list-style: disc;\n    padding-left: 40px; margin-bottom: 14px; line-height: 1.625em; font-size: 1rem">\n<li>Not paying federal (and often state) income taxes, to the detriment of local communities&nbsp;&nbsp;</li>\n<li>Abandoning their original purpose and mission&nbsp;to serve low-income&nbsp;people&nbsp;</li>\n<li>Using their tax subsidies to buy banks and&nbsp;expand their market share in&nbsp;high-income communities&nbsp;&nbsp;</li>\n<li>Unfairly benefitting from&nbsp;lax oversight by federal and state regulators&nbsp;</li>\n<li>Avoiding appropriate Congressional oversight, as&nbsp;credit unions’&nbsp;regulatory agency, the National Credit Union Administration, is&nbsp;not&nbsp;strongly regulated</li>\n</ul>\n\n<p>All of this poses risks to local communities and&nbsp;economies, and contributes&nbsp;to unfair competitive advantages for large credit unions&nbsp;at the expense of smaller&nbsp;credit unions and community banks.</p>\n\n<p>Reform Credit Unions believes that leveling the playing field—tax and regulatory parity—is of vital importance to all Americans, and most especially to the customers and supporters of small credit unions nationwide, who are under constant and increasing competitive pressure from large credit unions’ abuse of the existing legal and regulatory structure.&nbsp;</p>\t\t\t\t\t\t</div>',
      },
    ],
  })
}
