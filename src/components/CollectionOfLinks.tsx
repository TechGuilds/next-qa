import React from 'react';
import { Container } from 'kajoo-components/sitecore-nextjs';
import { Link, Button } from '../kajoo-lib';
import styles from './CollectionOfLinks.module.css';
import { LinkField, LinkFieldValue, TextField } from '@sitecore-jss/sitecore-jss-nextjs';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const CollectionOfLinks = (props: {
  rootClassName: string | number;
  fields: {
    href1: string | LinkField | LinkFieldValue;
    text1: string | TextField | undefined;
    href3: string | LinkField | LinkFieldValue;
    text4: string | TextField;
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
            href="#static-url"
            text={props.fields.text1}
            className={` ${styles['link1']} ${styles['link-link-style']} `}
          />
          <Link
            href={props.fields.href3}
            text="static text"
            className={` ${styles['link2']} ${styles['link-link-style-2']} `}
          />
        </Container>
        <Container className={` ${styles['container2']} ${styles['container-default']} `}>
          <Button
            text="Button"
            link="Linnk"
            className={` ${styles['button']} ${styles['button-button-364']} `}
          >
            button with static link, text, children
          </Button>
          <Button
            text="Button"
            link={props.fields.href3}
            className={` ${styles['button']} ${styles['button-button-364']} `}
          >
            button with dynamic link, static text, children
          </Button>
          <Button
            text={props.fields.text4}
            link={props.fields.href3}
            className={` ${styles['button']} ${styles['button-button-364']} `}
          >
            button with dynamic link, dynamic text and static children
          </Button>
          <Button
            text={props.fields.text4}
            className={` ${styles['button1']} ${styles['button-button-540']} `}
          />
        </Container>
      </Container>
    </Container>
  );
};

export default CollectionOfLinks;
