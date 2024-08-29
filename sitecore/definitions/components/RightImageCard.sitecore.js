import { SitecoreIcon } from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'RightImageCard',
    displayName: 'RightImageCard',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    contentResolver: '',
    fields: [
      {
        name: 'Title',
        type: 'Single-Line Text',
        standardValue: 'You have questions, we have answers',
      },
      {
        name: 'Description',
        type: 'Rich Text',
        standardValue:
          'Will I be in charge of my day? Can I eat what, and when, I want? Will I have to move if I need extra care? Moving to senior living is a big decision. If you’re not asking questions like these, maybe you should. Ask us. You’ll get the straightforward answers you deserve.',
      },
      {
        name: 'Link',
        type: 'General Link',
        standardValue:
          "<link text='Link' linktype='external' url='#' anchor='' target=''/>",
      },
      {
        name: 'Image',
        type: 'Image',
        standardValue: 'https://app.kajoo.ai/icons/default-imag.svg',
      },
    ],
  })
}
