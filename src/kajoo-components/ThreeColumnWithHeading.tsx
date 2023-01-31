/* eslint-disable */
// @ts-nocheck
import React from 'react'
import {
  Container,
  Text,
  Image,
  Button,
} from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './ThreeColumnWithHeading.module.css'

const ThreeColumnWithHeading = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <Container className={styles['container']}>
        <Text
          text={props.text}
          className={` ${styles['text']} ${styles['paragraph-default']} `}
        />
        <Container
          className={` ${styles['container1']} ${styles['container-default']} `}
        >
          <Container
            className={` ${styles['container2']} ${styles['container-default']} `}
          >
            <Image
              src={props.src}
              className={` ${styles['image']} ${styles['image-default']} `}
            />
            <Text
              text={props.text1}
              className={` ${styles['text1']} ${styles['paragraph-default']} `}
            />
            <Button
              text={props.text2}
              className={` ${styles['button']} ${styles['button-default']} `}
            />
          </Container>
          <Container
            className={` ${styles['container3']} ${styles['container-default']} `}
          >
            <Image
              src={props.src1}
              className={` ${styles['image1']} ${styles['image-default']} `}
            />
            <Text
              text={props.text3}
              className={` ${styles['text2']} ${styles['paragraph-default']} `}
            />
            <Button
              text={props.text4}
              className={` ${styles['button1']} ${styles['button-default']} `}
            />
          </Container>
          <Container
            className={` ${styles['container4']} ${styles['container-default']} `}
          >
            <Image
              src={props.src2}
              className={` ${styles['image2']} ${styles['image-default']} `}
            />
            <Text
              text={props.text5}
              className={` ${styles['text3']} ${styles['paragraph-default']} `}
            />
            <Button
              text={props.text6}
              className={` ${styles['button2']} ${styles['button-default']} `}
            />
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

ThreeColumnWithHeading.defaultProps = {
  rootClassName: '',
  text: 'HEADER',
  src: '/icons/default-imag.svg',
  text1:
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
  text2: 'Button',
  src1: '/icons/default-imag.svg',
  text3:
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
  text4: 'Button',
  src2: '/icons/default-imag.svg',
  text5:
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
  text6: 'Button',
}

ThreeColumnWithHeading.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  src: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  src1: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  src2: PropTypes.string,
  text5: PropTypes.string,
  text6: PropTypes.string,
}

export default ThreeColumnWithHeading
