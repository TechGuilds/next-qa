/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Image } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Component1.module.css'

const Component1 = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Text text={props.text} tag="span" className={styles['text']} />
      <Text text={props.text1} tag="h1" className={styles['text1']} />
      <Image
        src={props.src}
        alt={props.alt}
        className={` ${styles['image']} ${styles['image-default']} `}
      />
    </Container>
  )
}

Component1.defaultProps = {
  rootClassName: '',
  text: 'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
  text1: 'Heading',
  src: '/icons/default-imag.svg',
  alt: '',
}

Component1.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
}

export default Component1
