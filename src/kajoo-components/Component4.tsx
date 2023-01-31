/* eslint-disable */
// @ts-nocheck
import React from 'react'
import {
  Container,
  Image,
  Button,
  Text,
} from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Component4.module.css'

const Component4 = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Image
        src={props.src1}
        className={` ${styles['image']} ${styles['image-default']} `}
      />
      <Button
        text={props.text7}
        className={` ${styles['button']} ${styles['button-default']} `}
      />
      <Text
        text={props.text3}
        className={` ${styles['text']} ${styles['paragraph-default']} `}
      />
    </Container>
  )
}

Component4.defaultProps = {
  rootClassName: '',
  src1: '/icons/default-imag.svg',
  text7: 'Button',
  text3:
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
}

Component4.propTypes = {
  rootClassName: PropTypes.string,
  src1: PropTypes.string,
  text7: PropTypes.string,
  text3: PropTypes.string,
}

export default Component4
