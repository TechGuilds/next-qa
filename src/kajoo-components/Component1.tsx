/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Component1.module.css'

const Component1 = (props) => {
  return (
    <Container className={` ${styles['main']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        <Container className={styles['container1']}>
          <Image
            src="/icons/default-imag.svg"
            className={` ${styles['image']} ${styles['image-default']} `}
          />
          <Text
            text="HEADER"
            className={` ${styles['text']} ${styles['paragraph-default']} `}
          />
          <Text
            text="Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air."
            className={` ${styles['text1']} ${styles['paragraph-default']} `}
          />
        </Container>
        <Container className={styles['container2']}>
          <Image
            src="/icons/default-imag.svg"
            className={` ${styles['image1']} ${styles['image-default']} `}
          />
          <Text
            text="HEADER"
            className={` ${styles['text2']} ${styles['paragraph-default']} `}
          />
          <Text
            text="Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air."
            className={` ${styles['text3']} ${styles['paragraph-default']} `}
          />
        </Container>
        <Container className={styles['container3']}>
          <Image
            src="/icons/default-imag.svg"
            className={` ${styles['image2']} ${styles['image-default']} `}
          />
          <Text
            text="HEADER"
            className={` ${styles['text4']} ${styles['paragraph-default']} `}
          />
          <Text
            text="Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air."
            className={` ${styles['text5']} ${styles['paragraph-default']} `}
          />
        </Container>
      </Container>
    </Container>
  )
}

Component1.defaultProps = {
  fields: {},
  rootClassName: '',
}

Component1.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default Component1
