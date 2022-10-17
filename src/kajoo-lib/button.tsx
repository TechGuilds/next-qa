import { FC } from 'react';
import Link from './link';
import { Text, TextField } from '@sitecore-jss/sitecore-jss-nextjs';

interface IButton {
  text: TextField | string;
  link?: Parameters<typeof Link>[0]['href'];
  [key: string]: unknown;
}

const Button: FC<IButton> = ({ text = '', children, link, ...rest }) => {
  if (link) {
    return (
      <Link href={link} text={text} {...rest}>
        {children}
      </Link>
    );
  }

  const textField = typeof text === 'string' ? { value: text } : text;

  return (
    <button {...rest}>
      <Text field={textField} />
      {children}
    </button>
  );
};

export default Button;
