/* eslint-disable */
// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { Container, Link } from 'kajoo-components/sitecore-nextjs';
import { Link as SitecoreLink } from '@sitecore-jss/sitecore-jss-nextjs';
import styles from './CollectionOfLinks.module.css';

const Link: FC<any> = (props) => {
  const { href = '', text = '', ...rest } = props;
  const textField = typeof text === 'string' ? { value: text } : text;
  const field = typeof href === 'string' ? { value: { href, text: textField.value } } : href;

  useEffect(() => {
    console.log('link', { props, textField, field });
  }, [props, field, textField]);

  return <div>hello link</div>;
};
export default Link;

const CollectionOfLinks = (props) => {
  // if (!props.fields?.href1?.value?.href || !props.fields?.href3?.value?.href) {
  //   return (
  //     <div>
  //       href missing {JSON.stringify({ href1: props.fields?.href1, href3: props.fields?.href3 })}
  //     </div>
  //   );
  // }

  // if (!props.fields?.text1?.value || !props.fields?.text4?.value) {
  //   return (
  //     <div>
  //       text missing {JSON.stringify({ text1: props.fields?.text1, text4: props.fields?.text4 })}
  //     </div>
  //   );
  // }

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
