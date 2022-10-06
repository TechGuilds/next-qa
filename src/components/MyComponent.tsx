/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Image } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './MyComponent.module.css'

const AppComponent = (props) => {
  return (
    <Container className={styles['root']}>
      <Container className={styles['container']}>
        <Text
          text={props.text}
          tag="h1"
          className={` ${styles['text']} ${styles['component-header-default']} `}
        />
        <Image
          src={props.src}
          alt={props.alt}
          className={` ${styles['image']} ${styles['component-image-default']} `}
        />
        <Text text={props.text1} tag="span" className={styles['text1']} />
      </Container>
    </Container>
  )
}

AppComponent.defaultProps = {
  text: 'Heading',
  src: '/icons/default-imag.svg',
  alt: '',
  text1:
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
}

AppComponent.propTypes = {
  text: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  text1: PropTypes.string,
}

export default AppComponent
