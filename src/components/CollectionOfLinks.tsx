/* eslint-disable */
// @ts-nocheck

import React, { useEffect } from 'react';
import { Container } from 'kajoo-components/sitecore-nextjs';
import { FC } from 'react';
import {
  Link as SitecoreLink,
  TextField,
  LinkField,
  LinkFieldValue,
} from '@sitecore-jss/sitecore-jss-nextjs';
import styles from './CollectionOfLinks.module.css';

interface ILink {
  text?: TextField | string;
  href: LinkField | LinkFieldValue | string; // ISitecoreLink['field'] | string;
  className?: string;
}

const Link: FC<ILink> = (props) => {
  const { href = '', text = '', ...rest } = props;
  const textField = typeof text === 'string' ? { value: text } : text;
  const field = typeof href === 'string' ? { value: { href, text: textField.value } } : href;

  useEffect(() => {
    console.log('link', { props, textField, field });
  }, [props, textField, field]);

  return <SitecoreLink field={field} {...rest} />;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const CollectionOfLinks = (props: {
  rootClassName: string | number;
  fields: {
    href1: string | LinkField | LinkFieldValue;
    text1: string | TextField | undefined;
    href3: string | LinkField | LinkFieldValue;
  };
}) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        <Container className={` ${styles['container1']} ${styles['container-default']} `}>
          <Link
            href={props.fields.href1}
            className={` ${styles['link']} ${styles['link-link-style-2']} `}
          />
          <Link
            href="#"
            text={props.fields.text1}
            className={` ${styles['link1']} ${styles['link-link-style']} `}
          />
          <Link
            href={props.fields.href3}
            className={` ${styles['link2']} ${styles['link-link-style-2']} `}
          />
        </Container>
        <Container className={` ${styles['container2']} ${styles['container-default']} `}>
          {/* <Button
            text="Button"
            link="Linnk"
            className={` ${styles['button']} ${styles['button-button-364']} `}
          />
          <Button
            text={props.fields.text4}
            className={` ${styles['button1']} ${styles['button-button-540']} `}
          /> */}
        </Container>
      </Container>
    </Container>
  );
};

export default CollectionOfLinks;
