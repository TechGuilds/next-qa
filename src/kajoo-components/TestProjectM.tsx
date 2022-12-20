/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image, Text } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './TestProjectM.module.css'

const TestProjectM = (props) => {
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
        <Text text={props.text} tag="span" className={styles['text']} />
      </Container>
    </Container>
  )
}

TestProjectM.defaultProps = {
  rootClassName: '',
  src: '/icons/default-imag.svg',
  alt: '',
  text: 'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
}

TestProjectM.propTypes = {
  rootClassName: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  text: PropTypes.string,
}

export default TestProjectM
