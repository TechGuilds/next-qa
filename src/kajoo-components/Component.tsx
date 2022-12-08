/* eslint-disable */
// @ts-nocheck
import React from 'react'
import {
  Container,
  Image,
  Text,
  RichText,
} from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Component.module.css'

const AppComponent = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Image
        src={props.src}
        alt={props.alt}
        className={` ${styles['image']} ${styles['image-default']} `}
      />
      <Text text={props.text} tag="span" className={styles['text']} />
      <Image
        src={props.src1}
        alt={props.alt1}
        className={` ${styles['image1']} ${styles['image-default']} `}
      />
      <RichText value={props.value} className={styles['richtext']} />
      <Text text={props.text1} tag="h1" className={styles['text1']} />
    </Container>
  )
}

AppComponent.defaultProps = {
  rootClassName: '',
  src: '/icons/default-imag.svg',
  alt: '',
  text: 'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
  src1: '/icons/default-imag.svg',
  alt1: '',
  value:
    '<p>Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.</p>',
  text1: 'Heading',
}

AppComponent.propTypes = {
  rootClassName: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  text: PropTypes.string,
  src1: PropTypes.string,
  alt1: PropTypes.string,
  value: PropTypes.string,
  text1: PropTypes.string,
}

export default AppComponent
