/* eslint-disable */
// @ts-nocheck
import React from 'react'
import {
  Container,
  Image,
  Text,
  Button,
} from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Component3.module.css'

const Component3 = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Image
        src={props.src}
        className={` ${styles['image']} ${styles['image-default']} `}
      />
      <Text
        text={props.text1}
        className={` ${styles['text']} ${styles['paragraph-default']} `}
      >
        <Button
          text={props.text6}
          className={` ${styles['button']} ${styles['button-default']} `}
        />
      </Text>
    </Container>
  )
}

Component3.defaultProps = {
  rootClassName: '',
  src: '/icons/default-imag.svg',
  text1:
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
  text6: 'Button',
}

Component3.propTypes = {
  rootClassName: PropTypes.string,
  src: PropTypes.string,
  text1: PropTypes.string,
  text6: PropTypes.string,
}

export default Component3
