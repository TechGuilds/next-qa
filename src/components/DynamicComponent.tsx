/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Link, Image } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './DynamicComponent.module.css'

const DynamicComponent = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Link
        href={props.fields.href}
        text={props.fields.text}
        className={'link-default'}
      />
      <Link
        href={props.fields.href1}
        text={props.fields.text1}
        className={'link-default'}
      />
      <Image
        src={props.fields.src1}
        alt={props.fields.alt1}
        className={'image-default'}
      />
      <Container className={styles['container']}>
        {['Item 1', 'Item 2', 'Item 3'].map((item, index) => (
          <Container key={index} className={styles['repeater-collection']}>
            <Image
              src={props.fields.src2}
              alt={props.fields.alt2}
              className={'image-default'}
            />
          </Container>
        ))}
      </Container>
    </Container>
  )
}

DynamicComponent.defaultProps = {
  fields: {
    text2: 'dsffff',
    href: '#',
    text: '45452',
    href2: '#',
    text1: 'ddd',
    href1: '#',
    text3: 'jj',
    alt: 'default-kajoo-image',
    src: 'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/-pBf1g4PU9JsSgmmvEiiJ.png',
    alt1: 'default-kajoo-image',
    src1: 'https://',
    src2: 'https://app.kajoo.ai/icons/default-imag.svg',
    alt2: 'default-kajoo-image',
  },
  rootClassName: '',
}

DynamicComponent.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default DynamicComponent
