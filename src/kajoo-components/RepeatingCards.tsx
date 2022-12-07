/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Image } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './RepeatingCards.module.css'

const RepeatingCards = (props) => {
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
          <Image
            src={props.src}
            className={` ${styles['image']} ${styles['image-default']} `}
          />
        </Container>
        <Container
          className={` ${styles['container2']} ${styles['container-default']} `}
        >
          <Image
            src={props.src1}
            className={` ${styles['image1']} ${styles['image-default']} `}
          />
          <Container
            className={` ${styles['container3']} ${styles['container-default']} `}
          >
            <Text
              text={props.text1}
              className={` ${styles['text1']} ${styles['paragraph-default']} `}
            />
            <Text
              text={props.text2}
              className={` ${styles['text2']} ${styles['paragraph-default']} `}
            />
          </Container>
        </Container>
        <Container
          className={` ${styles['container4']} ${styles['container-default']} `}
        >
          <Container
            className={` ${styles['container5']} ${styles['container-default']} `}
          >
            <Text
              text={props.text3}
              className={` ${styles['text3']} ${styles['paragraph-default']} `}
            />
            <Text
              text={props.text4}
              className={` ${styles['text4']} ${styles['paragraph-default']} `}
            />
          </Container>
          <Image
            src={props.src2}
            className={` ${styles['image2']} ${styles['image-default']} `}
          />
        </Container>
      </Container>
    </Container>
  )
}

RepeatingCards.defaultProps = {
  rootClassName: '',
  text: 'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
  src: '/icons/default-imag.svg',
  src1: '/icons/default-imag.svg',
  text1: 'HEADER',
  text2:
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
  text3: 'HEADER',
  text4:
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
  src2: '/icons/default-imag.svg',
}

RepeatingCards.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  src: PropTypes.string,
  src1: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  src2: PropTypes.string,
}

export default RepeatingCards
