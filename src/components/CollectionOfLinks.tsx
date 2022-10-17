/* eslint-disable */
// @ts-nocheck
import React, { useState } from 'react';
import { Container, Link, Button } from 'kajoo-components/sitecore-nextjs';

import PropTypes from 'prop-types';

import styles from './CollectionOfLinks.module.css';

const CollectionOfLinks = (props) => {
  if (!props.fields?.href1?.value?.href || !props.fields?.href3?.value?.href) {
    return (
      <div>
        href missing {JSON.stringify({ href1: props.fields?.href1, href3: props.fields?.href3 })}
      </div>
    );
  }

  if (!props.fields?.text1?.value || !props.fields?.text4?.value) {
    return (
      <div>
        text missing {JSON.stringify({ text1: props.fields?.text1, text4: props.fields?.text4 })}
      </div>
    );
  }

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
          <Button
            text="Button"
            link="Linnk"
            className={` ${styles['button']} ${styles['button-button-364']} `}
          />
          <Button
            text={props.fields.text4}
            className={` ${styles['button1']} ${styles['button-button-540']} `}
          />
        </Container>
      </Container>
    </Container>
  );
};

CollectionOfLinks.defaultProps = {
  rootClassName: '',
  fields: {},
};

CollectionOfLinks.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
};

export default CollectionOfLinks;
