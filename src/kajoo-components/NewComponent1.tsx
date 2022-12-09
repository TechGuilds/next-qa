/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image, Text } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './NewComponent1.module.css'

const NewComponent1 = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <Container className={styles['container']}>
        <Container
          className={` ${styles['container1']} ${styles['container-default']} `}
        >
          <Image
            src={props.src}
            className={` ${styles['image']} ${styles['image-default']} `}
          />
          <Text
            text={props.text}
            className={` ${styles['text']} ${styles['paragraph-default']} `}
          />
        </Container>
        <Container
          className={` ${styles['container2']} ${styles['container-default']} `}
        >
          <Image
            src={props.src1}
            className={` ${styles['image1']} ${styles['image-default']} `}
          />
          <Text
            text={props.text1}
            className={` ${styles['text1']} ${styles['paragraph-default']} `}
          />
        </Container>
      </Container>
    </Container>
  )
}

NewComponent1.defaultProps = {
  rootClassName: '',
  src: '/icons/default-imag.svg',
  text: 'HEADER',
  src1: '/icons/default-imag.svg',
  text1: 'HEADER',
}

NewComponent1.propTypes = {
  rootClassName: PropTypes.string,
  src: PropTypes.string,
  text: PropTypes.string,
  src1: PropTypes.string,
  text1: PropTypes.string,
}

export default NewComponent1
