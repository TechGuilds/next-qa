import { FC } from 'react';
import { Link as SitecoreLink, TextField } from '@sitecore-jss/sitecore-jss-nextjs';

type ISitecoreLink = Parameters<typeof SitecoreLink>[0];

interface ILink extends Omit<ISitecoreLink, 'field' | 'href'> {
  text?: TextField | string;
  href: ISitecoreLink['field'] | string;
}

const Link: FC<ILink> = (props) => {
  const { href = '#', text = '', ...rest } = props;
  const textField = typeof text === 'string' ? { value: text } : text;
  const field = typeof href === 'string' ? { value: { href, text: textField.value } } : href;

  return <SitecoreLink field={field} {...rest} />;
};
export default Link;
