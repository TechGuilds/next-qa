/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Image } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './ThreeColumnTest.module.css'

const ThreeColumnTest = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <Container className={styles['container']}>
        <Container
          className={` ${styles['container1']} ${styles['container-default']} `}
        >
          <Text
            text={props.text}
            className={` ${styles['text']} ${styles['paragraph-default']} `}
          />
          <Text
            text={props.text1}
            className={` ${styles['text1']} ${styles['paragraph-default']} `}
          />
        </Container>
        <Container
          className={` ${styles['container2']} ${styles['container-default']} `}
        >
          <Image
            src={props.src1}
            className={` ${styles['image']} ${styles['image-default']} `}
          />
          <Text
            text={props.text2}
            className={` ${styles['text2']} ${styles['paragraph-default']} `}
          />
          <Text
            text={props.text3}
            className={` ${styles['text3']} ${styles['paragraph-default']} `}
          />
        </Container>
        <Container
          className={` ${styles['container3']} ${styles['container-default']} `}
        >
          <Container className={styles['container4']}>
            <Image
              src={props.src2}
              className={` ${styles['image1']} ${styles['image-default']} `}
            />
            <Image
              src={props.src}
              className={` ${styles['image2']} ${styles['image-default']} `}
            />
          </Container>
          <Text
            text={props.text4}
            className={` ${styles['text4']} ${styles['paragraph-default']} `}
          />
          <Text
            text={props.text5}
            className={` ${styles['text5']} ${styles['paragraph-default']} `}
          />
        </Container>
      </Container>
    </Container>
  )
}

ThreeColumnTest.defaultProps = {
  rootClassName: '',
  text: 'HEADER',
  text1:
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
  src1: '/icons/default-imag.svg',
  text2: 'HEADER',
  text3:
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
  src2: '/icons/default-imag.svg',
  src: '/icons/default-imag.svg',
  text4: 'HEADER',
  text5:
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
}

ThreeColumnTest.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  src1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  src2: PropTypes.string,
  src: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
}

export default ThreeColumnTest
