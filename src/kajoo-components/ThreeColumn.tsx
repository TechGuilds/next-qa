/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './ThreeColumn.module.css'

const ThreeColumn = (props) => {
  return (
    <Container className={` ${styles['main']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        <Container className={styles['container1']}>
          <Image
            src={props.src}
            className={` ${styles['image']} ${styles['image-default']} `}
          />
          <Text
            text={props.text}
            tag="span"
            className={` ${styles['text']} ${styles['paragraph-default']} `}
          />
          <Text
            text={props.text1}
            tag="span"
            className={` ${styles['text1']} ${styles['paragraph-default']} `}
          />
        </Container>
        <Container className={styles['container2']}>
          <Image
            src={props.src1}
            className={` ${styles['image1']} ${styles['image-default']} `}
          />
          <Text
            text={props.text2}
            tag="span"
            className={` ${styles['text2']} ${styles['paragraph-default']} `}
          />
          <Text
            text={props.text3}
            tag="span"
            className={` ${styles['text3']} ${styles['paragraph-default']} `}
          />
        </Container>
        <Container className={styles['container3']}>
          <Image
            src={props.src2}
            className={` ${styles['image2']} ${styles['image-default']} `}
          />
          <Text
            text={props.text4}
            tag="span"
            className={` ${styles['text4']} ${styles['paragraph-default']} `}
          />
          <Text
            text={props.text5}
            tag="span"
            className={` ${styles['text5']} ${styles['paragraph-default']} `}
          />
        </Container>
      </Container>
    </Container>
  )
}

ThreeColumn.defaultProps = {
  rootClassName: '',
  src: '/icons/default-imag.svg',
  text: 'HEADER',
  text1:
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
  src1: '/icons/default-imag.svg',
  text2: 'HEADER',
  text3:
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
  src2: '/icons/default-imag.svg',
  text4: 'HEADER',
  text5:
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
}

ThreeColumn.propTypes = {
  rootClassName: PropTypes.string,
  src: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  src1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  src2: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
}

export default ThreeColumn
