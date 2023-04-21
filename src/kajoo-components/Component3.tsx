/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Component3.module.css'

const Component3 = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container
        className={` ${styles['container']} ${styles['container-default']} `}
      >
        <Image
          src={props.src}
          alt={props.alt}
          className={` ${styles['image']} ${styles['image-default']} `}
        />
        <Container
          className={` ${styles['container1']} ${styles['container-default']} `}
        >
          <Text
            text={props.text}
            tag="h1"
            className={styles['header-default']}
          />
          <Text
            text={props.text1}
            tag="span"
            className={styles['paragraph-default']}
          />
        </Container>
      </Container>
    </Container>
  )
}

Component3.defaultProps = {
  rootClassName: '',
  src: 'https://qa-app.kajoo.ca/icons/default-imag.svg',
  alt: 'default-kajoo-imag',
  text: 'Heading',
  text1:
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
}

Component3.propTypes = {
  rootClassName: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
}

export default Component3
