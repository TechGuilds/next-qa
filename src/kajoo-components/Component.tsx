/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image, Text } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Component.module.css'

const AppComponent = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.className]} `}>
      <Container className={styles['container']}>
        <Container
          bgImage={props.bgImage}
          className={` ${styles['container1']} ${styles['component-container-default']} `}
        />
      </Container>
      <Image
        src={props.src}
        alt={props.alt}
        className={` ${styles['image']} ${styles['component-image-default']} `}
      />
      <Text text={props.text} tag="span" className={styles['text']} />
    </Container>
  )
}

AppComponent.defaultProps = {
  className: '',
  bgImage: '',
  src: '/icons/default-imag.svg',
  alt: '',
  text: 'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
}

AppComponent.propTypes = {
  className: PropTypes.string,
  bgImage: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  text: PropTypes.string,
}

export default AppComponent
