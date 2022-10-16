/* eslint-disable */
// @ts-nocheck
import React from 'react';
import { Container, Button, Link } from 'kajoo-components/sitecore-nextjs';
import { Link as SitecoreLink } from '@sitecore-jss/sitecore-jss-nextjs';

import PropTypes from 'prop-types';

import styles from './ComponentLocal.module.css';

const MohammedComponent = (props) => {
  console.log({ props });

  return (
    <Container className={styles['root']}>
      <Container className={styles['container']}>
        <Container className={` ${styles['container1']} ${styles['container-default']} `}>
          <Button
            text="Statics"
            link="www.statics.com"
            className={` ${styles['button1']} ${styles['button-btn']} `}
          />

          <Button
            text={props.fields.text15}
            link="LinkStatic.com"
            className={` ${styles['button3']} ${styles['button-default']} `}
          />
        </Container>
        <Container className={` ${styles['container2']} ${styles['container-default']} `}>
          <SitecoreLink
            field={props.fields.href5}
            className={` ${styles['link']} ${styles['link-default']} `}
          />
          <SitecoreLink
            field={{ href: '#' }}
            className={` ${styles['link1']} ${styles['link-link-350']} `}
          />
          <SitecoreLink
            field={props.fields.href7}
            className={` ${styles['link2']} ${styles['link-link-350']} `}
          />
          <SitecoreLink
            field={{ href: 'LinkStatic.com' }}
            className={` ${styles['link3']} ${styles['link-link-350']} `}
          />
          <SitecoreLink
            field={props.fields.href9}
            className={` ${styles['link4']} ${styles['link-link-350']} `}
          />
        </Container>
      </Container>
    </Container>
  );
};

MohammedComponent.defaultProps = {
  fields: {},
};

MohammedComponent.propTypes = {
  fields: PropTypes.object,
};

export default MohammedComponent;
