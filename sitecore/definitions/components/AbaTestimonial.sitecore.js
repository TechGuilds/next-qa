import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'AbaTestimonial',
    displayName: 'AbaTestimonial',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    contentResolver: '',
    fields: [
      {
        name: 'text',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Expert Views',
      },
      {
        name: 'text1',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Josh Daniels, Libertas Institute',
      },
      {
        name: 'text2',
        type: CommonFieldTypes.SingleLineText,
        standardValue:
          '“If Congress wants to make the tax system fairer, lawmakers should focus on unfair tax advantages and loopholes received by certain businesses and industries. To see the most blatant example of one special interest receiving preferential treatment through the tax code, look no further than the ridiculous charity status that allows big credit unions to make millions of dollars without paying a dime in taxes.”',
      },
      {
        name: 'href',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='— Deseret News, 2017' linktype='external' url='#' anchor='' target=''/>",
      },
    ],
  })
}
