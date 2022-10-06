/* eslint-disable */
// @ts-nocheck
import React from 'react'
import {
  Container,
  Text,
  Image,
  RichText,
  Link,
} from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './DemoComp.module.css'

const DemoComp = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.className]} `}>
      <Text
        text={props.text}
        tag="span"
        className={` ${styles['text']} ${styles['demo-comp-header-default']} `}
      />
      <Image
        src={props.src}
        alt={props.alt}
        className={` ${styles['image']} ${styles['demo-comp-image-default']} `}
      />
      <RichText value={props.value} className={styles['richtext']} />
      <Link
        href={props.href}
        target={props.target}
        rel={props.rel}
        text={props.text1}
        className={` ${styles['link']} ${styles['demo-comp-link-default']} `}
      />
    </Container>
  )
}

DemoComp.defaultProps = {
  className: '',
  text: 'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
  src: '/icons/default-imag.svg',
  alt: '',
  value:
    '<p>Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.</p>',
  href: '#',
  target: '_blank',
  rel: 'noreferrer noopener',
  text1: 'Link',
}

DemoComp.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  value: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,
  text1: PropTypes.string,
}

export default DemoComp
